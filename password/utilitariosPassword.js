
esMayuscula = function(caracter){
    if (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90){
        return true;
    } else {
        return false;
    }
}

esDigito = function(caracter){
    if (caracter.charCodeAt()>=48 && caracter.charCodeAt()<=57){
        return true;
    } else {
        return false;
    }
}

esEspecial = function(caracter){
    if (caracter.charCodeAt()== 45 ||caracter.charCodeAt()== 42 || caracter.charCodeAt()== 95 ){
        return true;
    } else {
        return false;
    }
}

mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
