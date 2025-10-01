calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
let nombreProducto = recuperarTexto("txtProducto");
let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
let precioProducto = recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT

    if(esProductoValido(nombreProducto) == false & 
    esCantidadValida(cantidad)== false  & 
    esPrecioValido(precioProducto) == false ){ 
    //variables para almacenar los retornos de las funciones
    let valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);
    let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    let valorSubtotalConDescuento = valorSubtotal - valorDescuento;
    let valorIVA = calcularIva(valorSubtotalConDescuento);
    mostrarTexto("lblIva", valorIVA.toFixed(2));
    let valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(2));
    }
    //mostrarTexto("lblResumen", "Valor a pagar por " + cantidad +" "+ nombreProducto + "   con $ " + valorDescuento
    //   + " de descuento: USD " + valorTotal);
}



limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","0.0");
    mostrarTextoEnCaja("txtCantidad","0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblIva", "0.0");
    mostrarTexto("lblTotal", "0.0");
}

esProductoValido = function(nombreProducto){
    if (nombreProducto == "") {
        mostrarTexto("lblError1", "Campo Obligatorio");
        return true;
    } else  if (nombreProducto.length > 10) {
        mostrarTexto("lblError1", "Supera mas de 10 caracteres");
        return true;
    } else {
        mostrarTexto("lblError1", "");
        return false;
    }
}

esCantidadValida = function(cantidad){
    if (isNaN(cantidad)) {
        mostrarTexto("lblError2", "Campo Obligatorio");
        return true;
    } else  if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "Cantidad Invalida");
        return true;
    } else {
        mostrarTexto("lblError2", "");
        return false;
    }
}

esPrecioValido = function(precioProducto){
    if (isNaN(precioProducto)) {
        mostrarTexto("lblError3", "Campo Obligatorio");
        return true;
    } else  if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto("lblError3", "Precio Invalido");
        return true;
    } else {
        mostrarTexto("lblError3", "");
        return false;
    } 
}
