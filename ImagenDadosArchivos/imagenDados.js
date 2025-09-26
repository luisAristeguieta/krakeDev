jugar=function(){
    let resultado = lanzarDado();
    console.log(resultado);
    mostrarImagenDado(resultado);
   
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