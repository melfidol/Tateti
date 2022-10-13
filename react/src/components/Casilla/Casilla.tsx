import "./Casilla.css"

interface props {
    handleClick: () => void
    posicion: number
    index: number
}
function Casilla({handleClick, posicion, index}:props ) {
    
    return (
        <button className={"Tbutton jugador" + posicion } onClick={handleClick} ></button>

    )
}
export default Casilla