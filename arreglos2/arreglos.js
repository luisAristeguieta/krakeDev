// Repaso de arreglos de elementos.

let notas = [];

agregarValorDirecto = function(){
    console.log("El arreglo tiene un tamano de: " + notas.length + " y tiene un acumulado de: " + 
notas + "y se va agrego el valor con la funcion push de: " + notas + "y se puede acceder con estructura indexada" +
"para validar o evaluar con [], al: " + notas[0])
    notas.push(24);
    console.log("El arreglo tiene un tamano de: " + notas.length + " y tiene un acumulado de: " + 
notas + "y se va agrego el valor con la funcion push de: " + notas + "y se puede acceder con estructura indexada" +
"para validar o evaluar con [], al: " + notas[0])
    notas.push(37);
        console.log("El arreglo tiene un tamano de: " + notas.length + " y tiene un acumulado de: " + 
notas + "y se va agrego el valor con la funcion push de: " + notas + "y se puede acceder con estructura indexada" +
"para validar o evaluar con [], al: " + notas[1])
}

// Ahora agregar valores desde la caja de texto:
// 0 Funcion para agregar elementos push con el valor recibido: Solo agrega con push
agregarNotasConCaja = function(nota){
    notas.push(nota);
    mostrarNotaTabla();
}

// Ejecutador de funcion y extraccion de la variable para que le pase el valor a la funcion anterior
ejecutarAgregarNota =  function(){
    let notaRecuperada = recuperarEntero ("txNotas");
    agregarNotasConCaja(notaRecuperada);
}

recorrerArreglo = function(){

    let notaR;

    for(let i=0 ; i<notas.length ; i++){
        notaR = notas[i];
        console.log("Dentro del For");
        console.log (i);
        console.log (notaR);
    }
    console.log("Fuera del For");
        console.log (notaR);
}

calcularPromedio = function(){
let sumaNotas = 0;
let promedio;

    for (let i=0 ; i<notas.length ; i++){
        sumaNotas = notas[i];
        sumaNotas += sumaNotas;
    }
    promedio = sumaNotas / notas.length
    return promedio;
}

ejecutarPromedio = function(){
    let promedio = calcularPromedio();
    cambiarTexto("lblResultado",promedio)
}

generarTabla = function(){
    let table;
    let cmpTable = document.getElementById("divTable");
    table += "<table><tr><td>Uno</td></tr></table>" +
             "<table><tr><td>Dos</td></tr></table>"
    cmpTable.innerHTML = table;
}

mostrarNotaTabla = function(){
    let cmpTable = document.getElementById("divTable")
    let table = "<table><tr><th>Indice</th><th>Nota</th></tr>";
    let miNota;
    for (let i=0 ; i<notas.length ; i++){
        miNota = notas[i];
        table +="<tr>"
        table +="<td>" + i + "</td>"
        table +="<td>" + miNota + "</td>"
        table +="</tr>"
    }
    table += "</table>"
    cmpTable.innerHTML = table;
}


/* 

*/