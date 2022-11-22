import { useEffect, useState } from "react"
import Casilla from "../../components/Casilla/Casilla"
import "./tateti.css"
import { SnackbarOrigin, Snackbar, Alert } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
const ipcRenderer = window.require("electron").ipcRenderer

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
        [0, 0, 0])

    const [jugador, setJugador] = useState(1) // jugador 1 o jugador 2

    const [message, setMessage] = useState("");

    const [mostrarVictoria, setMostrarVictoria] = useState(false);

    const backroom1 = [2,2,0,2,0,1,0,1,1]

    const [enterBackroom1, setEnterBackroom1] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        let bandera = true
    posiciones.forEach((element: any, index: any) => {
        bandera = element === backroom1[index]
    })

    if(bandera){
        ipcRenderer.send('completar-objetivo', 'No way out')
        setState(p => ({ ...p, open: true }))
        setEnterBackroom1(true)
    }
    },[posiciones])

        useEffect(() => {
            if(enterBackroom1){
                setMessage('backroom')
                setState(p => ({ ...p, open: true }))
                navigate('/backroom1')
            } 
        }, [enterBackroom1])

        

    function CambiarPosicion(index: number, newState: SnackbarOrigin) { // falta poner esto en un if, restringiendo poder cambiar de ficha si la posicion ya esta tomada por un jugador
        
        if (posiciones[index] != 0) {
            setMessage("Posicion ya tomada!")

            setState({ open: true, ...newState });

        }
        else {
            let nuevasPosiciones = [...posiciones]
            nuevasPosiciones[index] = jugador
            setPosiciones(nuevasPosiciones)
            console.log(nuevasPosiciones)
        }
    }

    useEffect(() => {
        Ganar()
        setJugador(jugador % 2 + 1)

    }, [posiciones])

    function CheckObjetivos(partidasJugadas: number, partidasGanadas: any){
        if(partidasJugadas===1){
            setMessage("Completa una partida!")
            ipcRenderer.send('completar-objetivo', 'Welcome Noobie')
                setState(p => ({ ...p, open: true }))
        }
        if(partidasJugadas===3){
            setMessage("Completa 3 partidas de tateti")
            ipcRenderer.send('completar-objetivo', 'U served kween')
                setState(p => ({ ...p, open: true }))
        }
        if(partidasGanadas[0] === 1){
            setMessage("Completa 1 partida como cruz")
            ipcRenderer.send('completar-objetivo', 'Saint Jesus')
                setState(p => ({ ...p, open: true }))
        }
        if(partidasGanadas[1] === 1){
            setMessage("Completa 1 partida como circulo")
            ipcRenderer.send('completar-objetivo', 'Running in circles')
                setState(p => ({ ...p, open: true }))
        }
    }

    function Restart() {
        setPosiciones([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setJugador(jugador % 2 + 1)
        let partidas = [...partidasGanadas];
        let partidasJugadas = partidasGanadas[0];
        partidasJugadas +=1;
        partidas=[partidasJugadas,partidasGanadas[1],partidasGanadas[2]]
        setPartidasGanadas(partidas)
        CheckObjetivos(partidasJugadas, partidas)

    }


    function Ganar() {
        PosicionesGanadoras.forEach(element => {
            let partidasGanadasJugador = [...partidasGanadas];
            let partidasJugadas = partidasGanadas[0];
            let jugador1 = partidasGanadas[1];
            let jugador2 = partidasGanadas[2];
            if (posiciones[element[0]] == jugador && posiciones[element[1]] == jugador && posiciones[element[2]] == jugador) {
                setMessage("Ganaste zorra!");
                setState(p => ({ ...p, open: true }));
                setMostrarVictoria(true)
                Restart();
               partidasJugadas += 1;
                if (posiciones[element[0]] === 1) {

                    partidasGanadasJugador = [partidasJugadas,jugador1 + 1, jugador2];
                    setPartidasGanadas(partidasGanadasJugador)

                } else {
                    partidasGanadasJugador = [partidasJugadas,jugador1, jugador2 + 1];
                    setPartidasGanadas(partidasGanadasJugador)

                }
                CheckObjetivos(partidasJugadas, partidasGanadasJugador)

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

    }

    function StopMVictoria() {
        setMostrarVictoria(false)

    }


    //nk


    /* <h1> Tablero gg</h1>  */

    return (
        <div id="aplicacion">

            {mostrarVictoria && <div className={mostrarVictoria ? "mostrarVictoria" : "noMostrarVictoria"}>
                Victoria

                <h1 className="textoVictoria">
                    Te ganasta una bondiolitaa
                </h1>

                {/*<div className="relativeB"> <div className="burbujas"/> </div>*/}

                <div className="banderines">
                    <div className="divBanderines" id="b1"> </div>
                    <div className="divBanderines" id="b2"></div>
                    <div className="divBanderines" id="b3"></div>
                    <div className="divBanderines" id="b4"></div>
                    <div className="divBanderines" id="b5"></div> 
                </div>
                

                <div id="video"> </div>

                <div id="animacion" ></div> 
        
                <audio src="/source/boca2.mp3" itemType='mp3' autoPlay></audio>

                

            </div>
            }

            

            

            <div className="barraTitulo">
                <div className="displayContador">
                    <div> <h3>Jugador 1 </h3> </div>

                    <div className="numContador"><p>{partidasGanadas[1]}</p>  </div>

                </div>

                <h2 className="textoGanador" style={CambiarColorTexto()}> Turno jugador {jugador} </h2>

                <div className="displayContador">
                    <div><h3>Jugador 2 </h3> </div>

                    <div className="numContador"><p>{partidasGanadas[2]}</p>  </div>
                </div>

            </div>


            <button className="restartBtt" onClick={Restart}> RESTART </button>


            <div className="tablero">
                {posiciones.map((posicion, index) =>
                    <Casilla handleClick={() => CambiarPosicion(index, { vertical: 'top', horizontal: 'center', })} tipo='personaje' posicion={posicion} index={index} />

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
