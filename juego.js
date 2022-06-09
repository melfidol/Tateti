/*
let turno = 1;
let fichas = ["O" , "X"];
let puestas = 0;
let partidaTerminada = false;
let textoGanador = document.getElementById("TextoGanador");
let botones = Array.from(document.getElementBytagName("button"));

botones.forEach(X => x.addEventListener("click", ponerFicha));

function ponerFicha(event){
    let botonPulsado = event.target;
    if (!partidaTerminada && botonPulsado.innerHTML ==""){
        botonPulsado.innerHTML = fichas[turno];
        puestas += 1;

        let estadoPartida = estado();
        if(estadoPartida == 0){
            cambiarTurno();
            if(puestas < 9){
                ia();
                estadoPartida = estado();
                puestas += 1;
                cambiarTurno();
            }
        }
        if (estadoPartida == 1){
            textoGanador.innerHTML ="Has perdido";
            partidaTerminada = true;
            textoGanador.style.visibility = "visible";
        }
        
    }

}


*/








// ==================== CONSTANTS ==================== //
const STATUS_DISPLAY = document.querySelector(".textoGanador"),
  GAME_STATE = ["", "", "", "", "", "", "", "", ""],
  WINNINGS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  WIN_MESSAGE = () => `El jugador ${currentPlayer} ha ganado!`,
  DRAW_MESSAGE = () => `El juego ha terminado en empate!`,
  CURRENT_PLAYER_TURN = () => `Turno del jugador ${currentPlayer}`

// ==================== VARIABLES ==================== //
let gameActive = true,
  currentPlayer = "O"

// ==================== FUNCTIONS ==================== //

function main() {
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  listeners()
}

function listeners() {
  document.querySelector('.tablero').addEventListener('click', handleButtonClick)
  document.querySelector('.restartGame').addEventListener('click', handleRestartGame)
  document.querySelector('.newGame').addEventListener('click', handleNewGame)
  document.querySelector('.quitGame').addEventListener('click', handleQuitGame)
}

function handleStatusDisplay(message) {
  STATUS_DISPLAY.innerHTML = message
}

function handleRestartGame() {
  gameActive = true
  currentPlayer = "X"
  restartGameState()
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  document.querySelectorAll('.Tbutton').forEach(button => button.innerHTML = "")
}

function handleNewGame() {
  gameActive = true
  currentPlayer = "X"
  restartGameState()
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  document.querySelectorAll('.Tbutton').forEach(button => button.innerHTML = "")
}

function handleQuitGame() {
  gameActive = true
  currentPlayer = "X"
  restartGameState()
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  document.querySelectorAll('.Tbutton').forEach(button => button.innerHTML = "")
}

function handleButtonClick(clickedButtonEvent /** Type Event **/) {
  const clickedButton = clickedButtonEvent.target
  if (clickedButton.classList.contains('.Tbutton')) {
    const clickedButtonIndex = Array.from(clickedButton.parentNode.children).indexOf(clickedButton)
    if (GAME_STATE[clickedButtonIndex] !== '' || !gameActive) {
      return false
    }

    handleButtonPlayed(clickedButton, clickedButtonIndex)
    handleResultValidation()
  }
}

function handleButtonPlayed(clickedButton /** object HTML **/, clickedButtonIndex) {
  GAME_STATE[clickedButtonIndex] = currentPlayer // Agrega en la posición correspondiente el valor ya sea "X" u "O" en el estado actual del juego
  clickedButton.innerHTML = currentPlayer // Agrega en el HTML el valor del jugador
}

function handleResultValidation() {
  let roundWon = false
  for (let i = 0; i < WINNINGS.length; i++) { // Itera cada uno de las posibles combinaciones ganadores
    const winCondition = WINNINGS[i] // Guarda la combinación por ejemplo: [0, 1, 2]
    let position1 = GAME_STATE[winCondition[0]],
      position2 = GAME_STATE[winCondition[1]],
      position3 = GAME_STATE[winCondition[2]] // Almacena el valor del estado actual del juego según las posiciones de winCondition

    if (position1 === '' || position2 === '' || position3 === '') {
      continue; // Si hay algún valor vacio nadie ha ganado aún
    }
    if (position1 === position2 && position2 === position3) {
      roundWon = true // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
      break
    }
  }

  if (roundWon) {
    handleStatusDisplay(WIN_MESSAGE())
    gameActive = false
    return
  }

  let roundDraw = !GAME_STATE.includes("") // Si todas las celdas tienen valor y la sentencia anterior fue falsa entonces es empate
  if (roundDraw) {
    handleStatusDisplay(DRAW_MESSAGE())
    gameActive = false
    return
  }

  handlePlayerChange()
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  handleStatusDisplay(CURRENT_PLAYER_TURN())
}

function restartGameState() {
  let i = GAME_STATE.length
  while (i--) {
    GAME_STATE[i] = ''
  }
}

main()