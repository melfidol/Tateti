const { ipcRenderer } = require("electron")

const botonMin = document.getElementById("botonMin")
const botonMaxRestore = document.getElementById("botonMax")
const botonCerrar = document.getElementById("botonCerrar")

//ESCUCHA MINIMIZAR, sendea mensaje para que le main lo ejecute
botonMin.addEventListener("click", () => {
    ipcRenderer.send("minimize")
})

//ESCUCHA CERRAR
botonCerrar.addEventListener("click", () => {
    ipcRenderer.send("close")
})

//Maximizar y restorear
botonMaxRestore.addEventListener("click", () => {
    ipcRenderer.send("maximizeRestoreApp")
})

ipcRenderer.on("isRestored", () => {
    ipcRenderer.send("maximize")
})

ipcRenderer.on("isMaximized", () => {
    ipcRenderer.send("unmaximize")
})



/*Función común, 

function minimizarClick() {
	Alert("Click función común")
}

//Función flecha,

const minimizarClick = () => {
	Alert("Click función común")
}

*/
