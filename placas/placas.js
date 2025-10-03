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

    let tipoVehiculo = obtenerTipoVehiculo(placa); 
    mostrarTexto("lblTipoVehiculo", "Es tipo: " + tipoVehiculo);
    /*
    if (tipoVehiculo == null){ // Esta condicion esta adicionada sin proposito ya que no existe ningun vehiculo 
    con etse parametro siendo nulo. En el segundo caractere de la placa no se excluye ninguna letra. 
        mostrarTexto("lblTipoVehiculo", "Tipo de Vehiculo Incorrecto");
    } else {
        mostrarTexto("lblTipoVehiculo", "Es tipo: " + tipoVehiculo);
    }*/
}