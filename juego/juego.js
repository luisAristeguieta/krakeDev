jugar = function(seleccionado){

let elemento = generarElemento();
mostrarImagen ("img",generarRuta (elemento));
let ganador = determinarGanador(seleccionado,elemento);
mostrarTexto ("lblComputador","El Computador eligio:");

if (ganador == 0){
    mostrarTexto("lblResultado", "Empate");
    
} else if (ganador == 1){
    mostrarTexto("lblResultado", "Ganaste la Partida");
} else {
    mostrarTexto("lblResultado", "Perdiste la Partida");
}

}