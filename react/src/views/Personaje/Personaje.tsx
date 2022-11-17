import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./personaje.css"
import Casilla from "../../components/Casilla/Casilla";

function Personaje() {

    const navigate = useNavigate();

    const [personajes, setPersonajes] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ])
    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2 

    const [personajeElegido1, guardarPersonaje1] = useState<number>() // jugador1 guardado con index como num del personaje q eligio
    const [personajeElegido2, guardarPersonaje2] = useState<number>() // jugador2 guardado con index como num del personaje q eligio

    function CambiarColorTexto(){
        if (jugador ==1){
            return({color:"#458bc4"})
        }
        else {
            return({color:"rgb(196, 69, 154)"})
        }
    }
    
    function Guardar() {
        //corregir IF para que no pase a la otra pag sin tener los dos personajes elegidos
        if(personajeElegido1 == 0 && personajeElegido2 == 0 ) {
            navigate("/tateti", {state: {personajeElegido1, personajeElegido2}})

            console.log("Jugador 1:" + personajeElegido1 + "Jugador 2:" + personajeElegido2)
        }
        
    }

    function ElegirPersonaje(index:number) {
        if (jugador == 1) {
            guardarPersonaje1(index);
            setJugador(2);
        }
        else {
            guardarPersonaje2(index);
        }
    }

    function Atras() {
        if(jugador == 1) {
            setJugador(2)
        }
        else {
            setJugador(1)
        }
    }

    function Adelante() {
        if(jugador == 1) {
            setJugador(2)
        }
        else {
            setJugador(1)
        }
    }
    
   
    return (
        <div id="aplicacion">

            <div id="jugadores">
                <button className="flechaI flecha" onClick={Atras}></button>
                <h2 className="textoJugador" style={CambiarColorTexto()}> Jugador {jugador} </h2>
                <button className="flechaD flecha" onClick={Adelante}></button>
            </div>

            <h3 className="textoElige" >Elige tu personaje</h3>
            
            <div id="boton_guardar">
                <button className={"saveBtt " + ((!personajeElegido1 || !personajeElegido2) ? "disabled" : "")} onClick={Guardar}><h4>GUARDAR</h4></button>
            </div>

            <div className="tablero">
                {   
                    personajes.map((personaje, index) =>
                    <Casilla handleClick={() => ElegirPersonaje(personaje)} posicion={personaje} index={index}/>
                )}
            </div>
        </div>
    )
}

export default Personaje;