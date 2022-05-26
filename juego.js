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
    }

}