calcularSubtotal = function(precio,cantidad){
    let subtotal = precio*cantidad;
    return subtotal;
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let porcentaje;
    if (cantidad < 3){
        porcentaje = 0;
    } else if (cantidad >= 3 && cantidad <= 5){
        porcentaje = 0.03;
    } else if (cantidad >= 6 && cantidad <= 11){
        porcentaje = 0.04;
    } else {
        porcentaje = 0.05;
    }
    let valorDescuento = subtotal * porcentaje;
    return valorDescuento;  // SOLO el valor del descuento
}

calcularIva = function(monto){
    let iva= monto * 0.12;
    return iva;
}

calcularTotal = function(subtotal,descuento,iva){
    let total = subtotal -descuento + iva;
    return total;
}