import { StarRate } from "@mui/icons-material";
import { AlertProps, Box, Button, Rating, Snackbar, SnackbarOrigin, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import './moves.css'

export interface State extends SnackbarOrigin {
    open: boolean;
}

function Moves() {

    const movesMade = 0;
    const movesLeft = 5 - movesMade;
    const [movesAvailable, setMovesA] = useState(Boolean);


    function updateMovesA(movesLeft: number) {
        if(movesLeft == 0) {
            setMovesA(false);
        }
    }
    
    return (
        <div className="container">
            

        </div>
    )

}
export default Moves;
