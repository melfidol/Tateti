import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Casilla from "../../components/Casilla/Casilla";
import "./tateti.css"
import { SnackbarOrigin, Snackbar, Alert } from "@mui/material";
import React from "react";
import { Gif } from "@mui/icons-material";


//  hacer css de las posiciones 0 (vacias) 1 y 2 para que se vean con las fichas puestasq

export interface State extends SnackbarOrigin {
    open: boolean;
}


function Tateti() {

    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;



    const handleClose = () => {
        setState({ ...state, open: false });
    };


    const [posiciones, setPosiciones] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0,
    ])

    const PosicionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [partidasGanadas, setPartidasGanadas] = useState(
        [0, 0])

    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2

    const [message, setMessage] = useState("");

    const [mostrarVictoria, setMostrarVictoria] = useState(false);


    function CambiarPosicion(index: number, newState: SnackbarOrigin) { // falta poner esto en un if, restringiendo poder cambiar de ficha si la posicion ya esta tomada por un jugador
        console.log(posiciones)
        if (posiciones[index] != 0) {
            setMessage("Posicion ya tomada!")

            setState({ open: true, ...newState });

        }
        else {
            console.log(index)
            let nuevasPosiciones = [...posiciones]
            nuevasPosiciones[index] = jugador
            setPosiciones(nuevasPosiciones)

        }
    }

    useEffect(() => {
        Ganar()
        setJugador(jugador % 2 + 1)

    }, [posiciones])

    function Restart() {
        setPosiciones([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setJugador(jugador % 2 + 1)

    }


    function Ganar() {
        PosicionesGanadoras.forEach(element => {
            if (posiciones[element[0]] == jugador && posiciones[element[1]] == jugador && posiciones[element[2]] == jugador) {
                setMessage("Ganaste zorra!");
                setState(p => ({ ...p, open: true }));

                setMostrarVictoria(true)

                Restart();

                let partidasGanadasJugador = [...partidasGanadas];
                let jugador1 = partidasGanadas[0];
                let jugador2 = partidasGanadas[1];


                if (posiciones[element[0]] === 1) {

                    partidasGanadasJugador = [jugador1 + 1, jugador2];
                    setPartidasGanadas(partidasGanadasJugador)

                } else {
                    partidasGanadasJugador = [jugador1, jugador2 + 1];
                    setPartidasGanadas(partidasGanadasJugador)


                }


            }
        });


    }

    function CambiarColorTexto() {
        if (jugador == 1) {
            return ({ color: "#458bc4" })
        }
        else {
            return ({ color: "rgb(196, 69, 154)" })

        }
    }

    useEffect(() => {
        if (mostrarVictoria == true) {
            MostrarVictoria()

        }

    }, [mostrarVictoria])

    function MostrarVictoria() {
        setTimeout(StopMVictoria, 10000);

        console.log("jej")

    }

    function StopMVictoria() {
        setMostrarVictoria(false)
        console.log("nah")
    }


    //nk


    /* <h1> Tablero gg</h1>  */

    return (
        <div id="aplicacion">

            {mostrarVictoria && <div className={mostrarVictoria ? "mostrarVictoria" : "noMostrarVictoria"}>
                Victoria

                <div id="video"> 

                </div>
            

                <audio src="/source/boca.mp3" itemType='mp3' autoPlay></audio>

               

            </div>}

            

            <h2 className="textoGanador" style={CambiarColorTexto()}> Turno jugador {jugador} </h2>

            <p> {partidasGanadas}</p>

            <button className="restartBtt" onClick={Restart}> RESTART </button>


            <div className="tablero">
                {posiciones.map((posicion, index) =>
                    <Casilla handleClick={() => CambiarPosicion(index, { vertical: 'top', horizontal: 'center', })} posicion={posicion} index={index} tipo={"jugador"} />

                )}

            </div>


            <Snackbar anchorOrigin={{ vertical, horizontal }} autoHideDuration={2000} open={open} onClose={handleClose} key={vertical + horizontal}>
                <Alert severity="warning" onClose={handleClose}>{message}
                </Alert>
            </Snackbar>

        </div>

    )

}

export default Tateti;
