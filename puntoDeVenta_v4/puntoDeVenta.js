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


    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */