calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");
    
    //variables para almacenar los retornos de las funciones
    let valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);
    let valorDescuento = calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento);
    let valorSubtotalConDescuento = valorSubtotal - valorDescuento;
    let valorIVA = calcularIva(valorSubtotalConDescuento);
    mostrarTexto("lblValorIVA", valorIVA);
    let valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal", valorTotal);
    mostrarTexto("lblResumen", "Valor a pagar por " + cantidad +" "+ nombreProducto + "   con " + porcentajeDescuento
        + "% de descuento: USD " + valorTotal);
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","0.0");
    mostrarTextoEnCaja("txtCantidad","0");
    mostrarTextoEnCaja("txtPorcentajeDescuento","0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}