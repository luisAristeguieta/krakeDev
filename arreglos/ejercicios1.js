let notas = [];

agregarElementos = function(){
    notas.push(3);
    notas.push(5);
    console.log(notas.length)
}

probarNota = function(){
let notaRecuperada = recuperarInt("txtNotas");
agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);
}

recorrerArreglo = function(){
let notaR;
    for(let indice = 0 ; indice<notas.length ; indice++){
        notaR = notas[indice];
        console.log (notaR);
    }
}

calcularPromedio = function(){
    let notaA;
    let sumaNotas = 0;
    let promedio; 

    for (let i = 0 ; i<notas.length ; i++){
        notaA = notas[i];
        sumaNotas += notaA;
    }

    promedio = (sumaNotas / notas.length);

return promedio
}

ejecutarPromedio = function(){
    let promediar = calcularPromedio();
    mostrarTexto("lblPromedio",promediar);
}