import { useState } from "react";
import "./tateti.css"


//  hacer css de las posiciones 0 (vacias) 1 y 2 para que se vean con las fichas puestasq


function Tateti() {
    const [posiciones, setPosiciones] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0,
    ])

    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2

    function CambiarPosicion(index:number) { // falta poner esto en un if, restringiendo poder cambiar de ficha si la posicion ya esta tomada por un jugador
        console.log(index)
        let nuevasPosiciones = [...posiciones]
        nuevasPosiciones[index] = jugador
        setPosiciones(nuevasPosiciones)
        setJugador(jugador % 2+1)
    }

    return (
        <div id="aplicacion">


            <h1> Tablero gg</h1>
            <h2 className="textoGanador"> Jugador 1 Ha ganado</h2>

            <div className="tablero">
                {posiciones.map((posicion, index) =>
                    <button className={"Tbutton jugador" + posicion } onClick={e=> CambiarPosicion(index)} >{posicion}-{index}</button>
                )}

            </div>
        </div>

    )

}

export default Tateti;