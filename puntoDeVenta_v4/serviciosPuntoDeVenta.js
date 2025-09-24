calcularSubtotal = function(precio,cantidad){
    let subtotal = precio*cantidad;
    return subtotal;
}

calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento = (monto*(porcentajeDescuento/100));
    return valorDescuento;
}
