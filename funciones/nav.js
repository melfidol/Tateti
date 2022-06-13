const { ipcRenderer } = require("electron")

var botonMin = null
var botonMaxRestore = null
var botonCerrar = null
const body = document.querySelector("body")
var nav = null

function Close(){
    ipcRenderer.send("close")
}

//ESCUCHA MINIMIZAR, sendea mensaje para que le main lo ejecute
fetch('./nav.html')
  .then(res => res.text())
  .then(htmlNav => {
    let oldElement = document.querySelector("script#replace_with_navbar");
    let newElement = document.createElement("div");
    newElement.innerHTML = htmlNav;
    oldElement.parentNode.replaceChild(newElement, oldElement);
    botonMin = document.getElementById("botonMin");
    botonMaxRestore = document.getElementById("botonMax")
    botonCerrar = document.getElementById("botonCerrar")
    
    nav = document.getElementById("barra");
    
    botonMin.addEventListener('click', () => {
        ipcRenderer.send('minimize')
      })
      botonMaxRestore.addEventListener('click', () => {
        ipcRenderer.send('maximize')
      })
      botonCerrar.addEventListener('click', () => {
        ipcRenderer.send('close')
      })
      })

//Cambiar icono maximizar
function changeMaxResBtn(isMaximizedApp) {
    if (isMaximizedApp) {
      botonMaxRestore.style.backgroundImage = "url('src/icon_restore.png')"
    } else {
        botonMaxRestore.style.backgroundImage = "url('src/icon_maximize.png')"
    }
}
  
  
// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isMaximized", () => {
changeMaxResBtn(true)
})
ipcRenderer.on("isRestored", () => {
changeMaxResBtn(false)
})



//Cambiar focus
function changeColorFocus(isFocus) {
if (isFocus) {
    barra.style.backgroundColor = '#212A5E'
    body.style.filter = "blur(0px)"

} else {
    barra.style.backgroundColor = '#3a3f5d'
    body.style.filter = "blur(5px)"
}
}


// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isFocus", () => {
changeColorFocus(true)
})

ipcRenderer.on("isInactive", () => {
changeColorFocus(false)
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
