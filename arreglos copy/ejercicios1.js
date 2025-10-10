let notas = [];

agregarElementos = function(){
    notas.push(3);
    notas.push(5);
    console.log(notas.length)
}

generarTabla =  function(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>" +
    "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Nota</th></tr>"
    let miNota;
    for( let i = 0 ; i < notas.length ; i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla +="</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


probarNota = function(){
let notaRecuperada = recuperarInt("txtNotas");
agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
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