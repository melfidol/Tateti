import "./Casilla.css"

interface props {
    tipo: "jugador" | "personaje"
    handleClick: () => void
    posicion: number
    index: number
}
function Casilla({tipo, handleClick, posicion, index}:props ) {
    
    return (
        <button className={"Tbutton "+ tipo + posicion } onClick={handleClick} ></button>

    )
}
export default Casilla