let frutas = ["manzana","pera","guayaba"];

ejecutarFruta  = function(){
    let fruta = recuperarTexto("txtFruta");
    let resultado = buscarFrutas(fruta);

    if (resultado == ""){
        alert("Fruta no encontrada");
    } else {
        alert("Fruta encontrada..! es: " + resultado );
    }

}

buscarFrutas1 = function(fruta){
    let elemento;
    let frutaEncontrada = null;

    for(let i=0 ; i<frutas.length ; i++){
        elemento = frutas[i];
        if(elemento == fruta){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}

buscarFrutas = function(fruta){
    let elemento;
    let frutaEncontrada = "";

    for(let i=0 ; i<frutas.length ; i++){
        elemento = frutas[i];
        if(elemento == fruta){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}
