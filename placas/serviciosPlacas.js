validarEstructura = function(placa){
let mensajeError = "";

// Validacion de la longitud de la placa 
if (placa.length < 7 || placa.length > 8) {
    mensajeError = mensajeError + "La placa debe tener 7 u 8 caracteres. ";
} 

// Validacion de los caracteres en mayusculas 
// Se agrega esctructura indexada [] para que le pase el orden del caracter a evaluar y no un numero
if (esMayuscula(placa[0]) == false){
    mensajeError = mensajeError + "El caracter 1 debe ser una letra Mayuscula. ";
} 

if (esMayuscula(placa[1]) == false){
    mensajeError = mensajeError + "El caracter 2 debe ser una letra Mayuscula. ";
}

if (esMayuscula(placa[2]) == false){
    mensajeError = mensajeError + "El caracter 3 debe ser una letra Mayuscula. ";
}

// Validacion del guion
if (esGuion(placa[3]) == false){
    mensajeError = mensajeError + "El caracter 4 debe ser un Guion. ";
}

// Validacion de los digitos

if (esDigito(placa[4]) == false){
    mensajeError = mensajeError + "El caracter 5 debe ser un Numero. ";
}

if (esDigito(placa[5]) == false){
    mensajeError = mensajeError + "El caracter 6 debe ser un Numero. ";
}

if (esDigito(placa[6]) == false){
    mensajeError = mensajeError + "El caracter 7 debe ser un Numero. ";
}

// Validacion si tiene 8 caracteres debe ser un digito
if (placa.length == 8){
    if (esDigito(placa[7]) == false){
    mensajeError = mensajeError + "El caracter 8 debe ser un Numero. ";
    }
}

if (mensajeError == ""){
    return null;
} else {
    return mensajeError;
}

}






/*esLongitudValida = function(placa){
    if (placa.length == "") {
        mostrarTexto("lblResultado", "Campo Obligatorio");
        return false;
    } else  
        return false;
    } else {
        mostrarTexto("lblResultado", "");
        return true;
    }
}*/



/*
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
}*/
