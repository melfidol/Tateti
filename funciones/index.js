const { ipcRenderer } = require("electron")

const botonMin = document.getElementById("botonMin")
const botonMaxRestore = document.getElementById("botonMax")
const botonCerrar = document.getElementById("botonCerrar")

//ESCUCHA MINIMIZAR, sendea mensaje para que le main lo ejecute
botonMin.addEventListener("click", () => {
    ipcRenderer.send("minimize")
})

//no anda gg
botonMaxRestore.addEventListener("click", () => {
    
    if(mainWindow.ismaximized()) ipcRenderer.send("unmaximize")
    else ipcRenderer.send("maximize")
})

//ESCUCHA CERRAR
botonCerrar.addEventListener("click", () => {
    ipcRenderer.send("close")
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
