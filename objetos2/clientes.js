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


/* Se tiene como objetivo del agregar clientes pero que el numero de cedula no se repita.
Paso 1, una funcion que al ingresar, al recibir la cedula como parametro identifique que la cedula se repite
 si se repite dar un mensaje diciendo el error y si no se repite poder seguir agregando clientes.*/


buscarCliente = function(cedula){

let elemento;
let clienteEncontrado = null;

    for(let i=0 ; i<clientes.length ; i++){
        elemento = clientes[i];
        if(elemento.cedula == cedula){
            clienteEncontrado = elemento;
            break;
        }
    }
    return clienteEncontrado;
}

/*Paso 2 se crea una funcion condicionada, que si encontro una cedula repetida este  agregara un cliente existente, 
caso contrario si agregara el cliente en el arreglo realizando un push. Recibiria como parametro un objeto
con un conjunto de datos como lo es nombre, cedula, edad y genero*/

agregarCliente = function(cliente){

let resultado = buscarCliente(cliente.cedula);

    if (resultado == null){
        clientes.push(cliente);
        alert("Cliente agregado.")
        generarCliente();
    } else {
        alert ("El cliente con numero de cedula: " + cliente.cedula + " ya se encuentra en el listado")
    }

}

/* Paso 3 se crea la funcion que extraeria la informacion de las cajas de textos para agregarla como objeto al
arreglo, se requieren para este caso, 4 cajas de textos, nombre, cedula, genero y edad, una ves obtenidos los
datos respectivos se invoca la funcion agregar cliente, realiza la validacion no exista cedula repetida 
y si es el caso agregarlo en el arreglo como otro objeto mas.
 */

ejecutarAgregarCliente = function(){

let nombre = recuperarTexto("txtNombre");
let cedula = recuperarInt("txtCedula");
let genero = recuperarTexto("txtGenero");
let edad = recuperarInt("txtEdad");

let clienteNuevo = {nombre,cedula,genero,edad}

agregarCliente(clienteNuevo);

// generarCliente(resultadoAgregar);

}