
ejecutarPrueba1 = function(){
    let mensaje= recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;

    for (let posicion = 0 ; posicion<cadena.length ; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for(let posicion = 0 ; posicion<=cadena.length -1 ; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}

ejecutarPrueba2 = function(){
    let mensaje= recuperarTexto("txtCadena");
    recorrerCadenaInversa(mensaje);
}

recorrerCadenaInversa =  function(cadena){
    let cadenaInversa = "";
    let caracter;
    for(let posicion = cadena.length -1 ; posicion >= 0 ; posicion--){
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
        cadenaInversa += caracter;
        mostrarTexto("lblResultado",cadenaInversa);
    }

    }

/*
mostrarInverso = function(){
    console.log("Antes del for");
for(let i=10 ; i>=0 ; i--){
    console.log(i)
}
    console.log("Despues del for");
}*/


