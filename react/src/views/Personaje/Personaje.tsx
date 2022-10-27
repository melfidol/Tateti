import { useState } from "react";
import { Link } from "react-router-dom";
import "./personaje.css"
import Casilla from "../../components/Casilla/Casilla";

function Personaje() {

    const [personajes, setPersonajes] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ])
    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2 

    function CambiarColorTexto(){
        if (jugador ==1){
            return({color:"#458bc4"})
        }
        else {
            return({color:"rgb(196, 69, 154)"})
        }
    }
    
    function Guardar() {
        
    
    }

    function ElegirPersonaje(index:number) {
        
    }

   
    return (
        <div id="aplicacion">

            <div id="jugadores">
                <button className="flechaI flecha"></button>
                <h2 className="textoJugador" style={CambiarColorTexto()}> Jugador {jugador} </h2>
                <button className="flechaD flecha"></button>
            </div>

            <h3 className="textoElige" >Elige tu personaje</h3>

            <button className="saveBtt" onClick={Guardar}> GUARDAR </button>

            <div className="tablero">
                {personajes.map((personaje, index) =>
                    <Casilla handleClick={() => ElegirPersonaje(index)} tipo="personaje" posicion={personaje} index={index}/>
                )}

            </div>
        </div>
    )
}



export default Personaje;