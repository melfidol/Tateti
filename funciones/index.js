
const botonMin = document.getElementById("botonMin")
const botonMax = document.getElementById("botonMax")
const botonCerrar = document.getElementById("botonCerrar")

botonMin.addEventListener("click", () => {
    alert("minimizado")
})

botonMax.addEventListener("click", () => {
    alert("maximizar")
})

botonCerrar.addEventListener("click", () => {
    alert("cerrar")
})

//Función común, 
function minimizarClick() {
	Alert("Click función común")
}

//Función flecha,
const minimizarClick = () => {
	Alert("Click función común")
}
