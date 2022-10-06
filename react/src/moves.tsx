import { useState } from "react";
import './moves.css'

function Moves() {

    const movesMade = 0;
    const movesLeft = 5 - movesMade;
    const [movesAvailable, setMovesA] = useState(Boolean);

    // on click de los botones del tateti modifica movesMade

    // y se va actualizando el estado de movesAvailable
    // que se va mostrando en pantalla en movesNumber


    function updateMovesA(movesLeft: number) {
        if(movesLeft == 0) {
            setMovesA(false);
        }
    }
    
    return (
        <div className="container">
            <h3 className="title">MOVIMIENTOS RESTANTES</h3>
            <h1 className="movesNumber"></h1>

        </div>
    )

}

export default Moves;
