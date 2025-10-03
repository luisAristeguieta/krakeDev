validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null){
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA ");
        mostrarTexto("lblError", erroresEstructura)
    }
    let nombreProvincia = obtenerProvincia(placa);
    if (nombreProvincia == null){
        mostrarTexto("lblProvincia", "Provincia Inconrrecta");
    } else {
        mostrarTexto("lblProvincia", "La placa pertenece a la provincia de: " + nombreProvincia);
    }
}