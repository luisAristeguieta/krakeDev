validarEstructura = function(placa){
let mensajeError = "";

// Validacion de la longitud de la placa 
if (placa.length < 7 || placa.length > 8) {
    mensajeError = mensajeError + "La placa debe tener 7 u 8 caracteres. ";
} else { // Validacion de los caracteres en mayusculas / Siempre y cuando tengan 7 u 8 caracteres
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

}


if (mensajeError == ""){
    return null;
} else {
    return mensajeError;
}

}

obtenerProvincia = function(placa){
let provincia;
if (placa[0] == "A"){
    provincia = "Azuay";
} else if (placa[0] == "B"){
    provincia = "Bolivar";
} else if (placa[0] == "U"){
    provincia = "Canar";
} else if (placa[0] == "C"){
    provincia = "Carchi";
} else if (placa[0] == "X"){
    provincia = "Cotopaxi";
} else if (placa[0] == "H"){
    provincia = "Chimborazo";
} else if (placa[0] == "O"){
    provincia = "El Oro";
} else if (placa[0] == "E"){
    provincia = "Esmeraldas";
} else if (placa[0] == "W"){
    provincia = "Galapagos";
} else if (placa[0] == "G"){
    provincia = "Guayas";
} else if (placa[0] == "I"){
    provincia = "Imbabura"
} else if (placa[0] == "L"){
    provincia = "Loja";
} else if (placa[0] == "R"){
    provincia = "Los Rios";
} else if (placa[0] == "M"){
    provincia = "Manabi";
} else if (placa[0] == "V"){
    provincia = "Morona Santiago";
} else if (placa[0] == "N"){
    provincia = "Napo";
} else if (placa[0] == "S"){
    provincia = "Pastaza";
} else if (placa[0] == "P"){
    provincia = "Pichincha";
} else if (placa[0] == "K"){
    provincia = "Sucumbios";
} else if (placa[0] == "Q"){
    provincia = "Orellana";
} else if (placa[0] == "T"){
    provincia = "Tungurahua"; 
} else if (placa[0] == "Z"){
    provincia = "Zamora Chinchipe";
} else if (placa[0] == "Y"){
    provincia = "Santa Elena";
} else if (placa[0] == "J"){
    provincia = "Santo Domingo de los Tsachilas";
} else {
    provincia = null;
}
    return provincia;
}

obtenerTipoVehiculo =function(placa){
let tipoVehiculo;
if(placa[1] == "A" || placa[2] == "Z"){
    tipoVehiculo = "Vehiculo Comercial";
} else if (placa[1] == "E") {
    tipoVehiculo = "Vehiculo Gubernamental";
} else if (placa[1] == "X") {
    tipoVehiculo = "Uso Oficial";
} else if (placa[1] == "S") {
    tipoVehiculo = "Vehiculo del Gobierno Provincial";
} else if (placa[1] == "M") {
    tipoVehiculo = "Vehiculo Municipal";
} else {
    tipoVehiculo = "Vehiculo Particular";
}
return tipoVehiculo;
}
