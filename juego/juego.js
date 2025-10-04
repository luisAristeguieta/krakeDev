
let puntosUsuarios = 0;
let puntosComputador = 0;

jugar = function(seleccionado){

let elemento = generarElemento();
mostrarImagen ("img",generarRuta (elemento));
let ganador = determinarGanador(seleccionado,elemento);
mostrarTexto ("lblComputador","El Computador eligio:");

if (ganador == 0){
    mostrarTexto("lblResultado", "Empate");
    
} else if (ganador == 1){
    mostrarTexto("lblResultado", "Ganaste la Partida");
    puntosUsuarios = puntosUsuarios + 1;
    mostrarTexto("lblUsuario", puntosUsuarios);
} else {
    mostrarTexto("lblResultado", "Perdiste la Partida");
    puntosComputador = puntosComputador + 1;
    mostrarTexto("lblComputador2", puntosComputador);
}

}