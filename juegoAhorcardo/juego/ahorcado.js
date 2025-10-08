esMayuscula = function(caracter){
return (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90);
}

esMinuscula = function(caracter){
return (caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122);
}


let palabraSecreta = ""

guardarPalabra = function(){
    let palabra = recuperarTexto ("txtSecreta");
    let mensaje = validacionPalabra(palabra);

    if (mensaje == ""){
        palabraSecreta = palabra;
        console.log("Palabra secreta guardada:", palabraSecreta);
    } else {
        alert(mensaje);
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


mostrarLetra = function(letra,posicion){
    mostrarTexto("div" + posicion ,letra);   
}

/*mostraLetra2 = function(letra,posicion){
    if(posicion == 0){
        mostrarTexto("div0" ,letra);
    } else if (posicion == 1){
        mostrarTexto("div1" ,letra);
    } else if (posicion == 2){
        mostrarTexto("div2" ,letra);
    } else if (posicion == 3){
        mostrarTexto("div3" ,letra);    
    }else if (posicion == 4){
        mostrarTexto("div3" ,letra);
} */ 
