// Funciones a detalles ejecutables
recuperarTexto = function(idComponente){
    let valorIngresado;
    let componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}

mostrarTexto = function(idComponente,mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarImagen = function(idComponente,rutaImagen){
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
}