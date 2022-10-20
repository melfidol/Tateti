import { useState } from "react";
import { Link } from "react-router-dom";
import Casilla from "../../components/Casilla/Casilla";
import "./tateti.css"


//  hacer css de las posiciones 0 (vacias) 1 y 2 para que se vean con las fichas puestasq


function Tateti() {
    const [posiciones, setPosiciones] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0,
    ])

    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2

    function CambiarPosicion(index:number) { // falta poner esto en un if, restringiendo poder cambiar de ficha si la posicion ya esta tomada por un jugador
        console.log(posiciones)
        if(posiciones[index] != 0){
            alert("cambie de posicion")
        }
        else{
        console.log(index)
        let nuevasPosiciones = [...posiciones]
        nuevasPosiciones[index] = jugador
        setPosiciones(nuevasPosiciones)
        setJugador(jugador % 2+1)
        
        }
    }

    function CambiarColorTexto(){
        if (jugador ==1){
            return({color:"#458bc4"})
        }
        else {
            return({color:"rgb(196, 69, 154)"})

        }
    }

    function Restart(){
        setPosiciones([0,0,0,0,0,0,0,0,0])
        setJugador(jugador % 2+1)

    } //nk

    /* <h1> Tablero gg</h1>  */

    return (
        <div id="aplicacion">


        

            
            <h2 className="textoGanador" style={CambiarColorTexto()}> Turno jugador {jugador} </h2>

            <button className="restartBtt" onClick={Restart}> RESTART </button>

    
           


            <div className="tablero">
                {posiciones.map((posicion, index) =>
                    <Casilla handleClick={() => CambiarPosicion(index)} tipo="jugador" posicion={posicion} index={index}/>
                )}

            </div>
        </div>

    )

}

export default Tateti;
