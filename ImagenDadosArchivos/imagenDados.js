let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado = lanzarDado();
    mostrarImagenDado(resultado);
    calcularPuntos(resultado);
    calcularLanzamientos();
    if (puntos > 20 || lanzamientos == 0){
        limpiar();
    }
}

calcularPuntos = function(resultado){
    puntos = puntos + resultado;
    cambiarTexto ("txtPuntos",puntos);
    if (puntos>20){
        cambiarTexto("lblResultado", "Has Ganados, Superaste los 20 Puntos tienes: " + puntos);
    }
}

calcularLanzamientos = function(){
    lanzamientos = lanzamientos -1
    cambiarTexto ("txtLanzamientos",lanzamientos);
    if (lanzamientos == 0){
        cambiarTexto("lblResultado", "Has Perdido, Superaste los numeros de intentos");
    }
}

limpiar = function(){
    cambiarTexto("txtPuntos", puntos=0)
    cambiarTexto("txtLanzamientos", lanzamientos=5)
    cambiarImagen("imagenDados","")
}

mostrarImagenDado = function(valorDado){
    if (valorDado == 1){
        cambiarImagen ("imagenDados","./dados1.png");
    } else if(valorDado == 2){
        cambiarImagen ("imagenDados","./dados2.png");
    } else if(valorDado == 3){
        cambiarImagen ("imagenDados","./dados3.png");
    } else if(valorDado == 4){
        cambiarImagen ("imagenDados","./dados4.png");
    } else if(valorDado == 5){
        cambiarImagen ("imagenDados","./dados5.png");
    } else if(valorDado == 6){
        cambiarImagen ("imagenDados","./dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}