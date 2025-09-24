calcularSubtotal = function(precio,cantidad){
    let subtotal = precio*cantidad;
    return subtotal;
}

calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento = (monto*(porcentajeDescuento/100));
    return valorDescuento;
}

calcularIva = function(monto){
    let iva= monto * 0.12;
    return iva;
}
