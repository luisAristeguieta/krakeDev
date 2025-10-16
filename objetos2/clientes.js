let clientes = [
    {nombre: "Juan", cedula:11111111, genero: "Masculino", edad:27},
    {nombre: "Albert", cedula:22222222, genero: "Masculino", edad:29},
    {nombre: "Maria", cedula:33333333, genero: "Femenino", edad:30},
    {nombre: "Luis", cedula:444444444, genero: "Masculino", edad:27}]

generarCliente = function(){

let cmpTabla = document.getElementById("clienteTabla");
let encabezados = "<tr><th>Nombre</th><th>Cedula</th><th>Genero</th><th>Edad</th></tr>"
let tabla = "<table>" + encabezados
let elementos;

    for(let i=0 ; i<clientes.length ; i++){
        elementos = clientes[i];
        tabla+="<tr>"
        tabla+="<td>" + elementos.nombre + "</td>"
        tabla+="<td>" + elementos.cedula + "</td>"
        tabla+="<td>" + elementos.genero + "</td>"
        tabla+="<td>" + elementos.edad + "</td>"
        tabla+="</tr>"
    }
    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}

