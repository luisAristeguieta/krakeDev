calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto = recuperarTexto("txtProducto");
    esProductoValido(nombreProducto);
   let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    esCantidadValida(cantidad);
    let precioProducto = recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    esPrecioValido(precioProducto);
    //let porcentajeDescuento = calcularDescuentoPorVolumen(); Se anula este input 
    
    //variables para almacenar los retornos de las funciones
    let valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);
    let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento);
    let valorSubtotalConDescuento = valorSubtotal - valorDescuento;
    let valorIVA = calcularIva(valorSubtotalConDescuento);
    mostrarTexto("lblIva", valorIVA);
    let valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal", valorTotal);
    //mostrarTexto("lblResumen", "Valor a pagar por " + cantidad +" "+ nombreProducto + "   con $ " + valorDescuento
    //   + " de descuento: USD " + valorTotal);
}



limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","0.0");
    mostrarTextoEnCaja("txtCantidad","0");
    mostrarTextoEnCaja("txtPorcentajeDescuento","0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblIva", "0.0");
    mostrarTexto("lblTotal", "0.0");
}

esProductoValido = function(nombreProducto){
    if (nombreProducto == "") {
        mostrarTexto("lblError1", "Campo Obligatorio");
        existeError = true;
    } else  if (nombreProducto.length > 10) {
        mostrarTexto("lblError1", "Supera mas de 10 caracteres");
        existeError = true;
    } else {
        mostrarTexto("lblError1", "");
    }
}

esCantidadValida = function(cantidad){
    if (isNaN(cantidad)) {
        mostrarTexto("lblError2", "Campo Obligatorio");
        existeError = true;
    } else  if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "Cantidad Invalida");
        existeError = true;
    } else {
        mostrarTexto("lblError2", "");
    }
}

esPrecioValido = function(precioProducto){
    if (isNaN(precioProducto)) {
        mostrarTexto("lblError3", "Campo Obligatorio");
        existeError = true;
    } else  if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto("lblError3", "Precio Invalido");
        existeError = true;
    } else {
        mostrarTexto("lblError3", "");
    } 
}



/*

    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "Debe Ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError1", "");
    }

    
esnotaValida = function (nota, idComponente) {
        if (isNaN(nota)) {
            mostrarTexto(idComponente, "Debe Ingresar un numero");
            return false;
        } else {
            if (nota>=0 && nota <=10){
            mostrarTexto(idComponente,"");
            return true;
            } else {
                mostrarTexto(idComponente,"El numero debe estar entre 0 y 10")
            }
        }
}
*/