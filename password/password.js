ejecutarValidacion = function(){
let password = recuperarTexto("txtPassword"); // Recupero el texto de la caja
let errores = validarPassword(password); // Invoco la funcion y almaceno en variable para evaludarla en caso de null es ok sino hay errores

    if (errores == ""){ 
    mostrarTexto("lblResultado","Password Correcto");
    } else {
    mostrarTexto("lblResultado",errores)
    }
}


validarPassword = function(password){

let errores = ""; 
    // Agrego bandera boleanas para determinar la condicion opuesta como error.
let tieneMayuscula = false;
let tieneDigito = false;
let tieneEspeciales = false;

    if(password.length < 8 || password.length > 16){ // Valido longitud enfocado al fuera del rango seria error (false)
        errores += "El password debe estar entre 8 y 16 caracteres. ";
    return errores; // No continuara si esta fuera de rango.
    } else {


        // Procedo a barrer la cadena con la sentencia for
        for(posicion = 0 ; posicion < password.length ; posicion++ ){
            let caracter = password.charAt(posicion);// teniendo el barrido con la variable caracter procedo a validar si toda la cadena tiene alguna mayuscula
        if(esMayuscula(caracter)) {
            tieneMayuscula = true;
        } 
        // teniendo el barrido con la variable caracter procedo a validar si toda la cadena tiene algun digito
        if(esDigito(caracter)){
            tieneDigito = true;
        }
    // teniendo el barrido con la variable caracter procedo a validar si toda la cadena tiene algun caracter especial.
        if(esEspecial(caracter)){
            tieneEspeciales = true;
        }
        }
    }
    // Verifico si encuentro errores de cada evaluacion.
    
        if (tieneMayuscula == false){
            errores += "Debe tener al menos una letra Mayuscula. "
        }
        if (tieneDigito == false){
            errores += "Debe tener al menos una Digito. "
        }
         if (tieneEspeciales == false){
            errores += "Debe tener al menos un signo especial permitido: (* - _). "
        }

    return errores;
}