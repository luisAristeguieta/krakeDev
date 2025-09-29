calcularPromedioNotas = function(){
    let n1 =recuperarFloat("txtn1");
    let n2 =recuperarFloat("txtn2");
    let n3 =recuperarFloat("txtn3");

    let promedio = calcularPromedio(n1,n2,n3);
    mostrarTexto ("lblPromedio", promedio.toFixed(2))
    
    if (promedio > 0 && promedio < 5){
        mostrarImagen("img","./rechazado.gif");
    }else if(promedio >= 5 && promedio <= 8){
        mostrarImagen("img","./buenTrabajo.gif");
    } else if (promedio > 8 && promedio <= 10){
        mostrarImagen("img","./exce.gif");
    } else {
        mostrarImagen("img","./error.gif");
    }
}


