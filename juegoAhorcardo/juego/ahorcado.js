esMayuscula = function(caracter){
return (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90);
}

esMinuscula = function(caracter){
return (caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122);
}

guardarPalabra = function(){
    let palabra = recuperarTexto ("txtSecreta");
    let mensaje = validacionPalabra(palabra);

    if (mensaje == ""){
        mostrarTexto("lblPalabra","");
    } else {
        mostrarTexto("lblPalabra",mensaje);
    }

}

validacionPalabra = function(palabra){

    let errorPalabra ="";
    let tieneMinuscula = false;

    if (palabra.length != 5 ){
        errorPalabra += "La palabra debe tener 5 letras Mayusculas.";
        return errorPalabra;
    } else {
        for(let i = 0 ; i < palabra.length ; i++){ 
            let caracter = palabra.charAt(i);

            if (esMinuscula(caracter)){
                tieneMinuscula = true;
            }
        }
    
    if (tieneMinuscula == true){
        return errorPalabra += "Algunas de las letras no es mayuscula.";
    }

    }
    return errorPalabra;
}
