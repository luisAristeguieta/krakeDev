calcularPromedioNotas = function(){
    let n1 =recuperarFloat("txtn1");
    let n2 =recuperarFloat("txtn2");
    let n3 =recuperarFloat("txtn3");

    let promedio = calcularPromedio(n1,n2,n3);
    mostrarTexto ("lblPromedio", promedio.toFixed(2))
    
    if (promedio > 7){
        mostrarImagen("img","./aprobado.gif")
    } else {
        mostrarImagen("img","./rechazado.gif")
    }
}