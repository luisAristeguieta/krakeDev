// Ejercicio # 1 crear funcion calcularTasaInteres 
// Que hace: indica el valor de la tasa de interes dependiendo del valor anual de la empresa
// Recibe: El valor Anual de la empresa.
// Retorna = Valor tasa a ortogar
calcularTasaInteres = function(ingresoAnual){
    let valorTasa;
        if (ingresoAnual < 300000){
            valorTasa = 16;
        } else if (ingresoAnual >= 300000 && ingresoAnual < 500000){
            valorTasa = 15;
        } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000){
            valorTasa = 14;
        } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000){
            valorTasa = 13;
        }   else {
            valorTasa = 12;
        }
    return valorTasa;
}
// Ejercicio # 2 Funcion calcularCapacidadDePago

calcularCapacidadDePago = function(edad,ingresos,egresos){
    let valorCuota;
    let sobra = ingresos-egresos;
    if (edad > 50 ){
        valorCuota = sobra * 0.3;
    } else {
        valorCuota = sobra * 0.4;
    }
    return valorCuota;
}

// Ejercicio # 3 Funcion calcularDescuento

calcularDescuento = function(precio,cantidad){
    let subtotal = precio * cantidad;
    let descuento;
        if (cantidad < 3){
            descuento = 0;
        } else if (cantidad >= 3 && cantidad <= 5){
            descuento = 0.02;
        } else if (cantidad >= 6 && cantidad <= 11){
            descuento = 0.03;
        } else {
            descuento = 0.04;
        }
    let valorDescuento = subtotal - (subtotal * descuento);
    return valorDescuento;
}