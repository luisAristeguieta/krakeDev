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

/* Nuevo objetivo: Buscar el cliente ingresando el numero de cedula, y muestra los otros datos que contiene el 
cliente en la busqueda. Dentro de una caja de texto coloca la cedula, y dentro de la funcion buscar cliente
compara si esta coincide. Se agrega un boton y una caja de texto y regresa el resultado ya sea en una 
alerta, en una etiqueta, en console o en este caso se coloca en las cajas de texto existente */

ejecutarBusquedad =  function(){

let cedulaIngresa =  recuperarInt("txtBusquedaCedula");
let resultadoBusquedad = buscarCliente(cedulaIngresa);

if (resultadoBusquedad == null){
    alert("Cliente No Encontrado")
} else {
    mostrarTextoEnCaja("txtNombre",resultadoBusquedad.nombre)
    mostrarTextoEnCaja("txtCedula",resultadoBusquedad.cedula)
    mostrarTextoEnCaja("txtGenero",resultadoBusquedad.genero)
    mostrarTextoEnCaja("txtEdad",resultadoBusquedad.edad)
}
}


/* Nuevo objetivo, Paso 1se desea modificar algunos datos o atributos del objeto, se busca, muestra la informacion
y se remplaza con el nuevo o nuevos datos excluyendo el dato de busquedad y procede a guardar reemplazando los 
antiguos datos*/

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);

    if (clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.genero = cliente.genero;
        clienteEncontrado.edad = cliente.edad;
    }

}

/* Paso 2 se crea funcion sin parametro para invocar la funcion previamente creada modificarCliente, 
se muetran los datos  de una previa busquedad y se crea un nuevo objeto para reemplazar con los nuevos datos, 
pasandole este nuevo objeto a la funcion modificarCliente, la funcion modificarCliente recibe el objeto
y remplaza con datos modificados y para mostrar se invoca a la funcion generarCliente para confirmar que se haya
modificado */

guardarCambios = function(){

let nombre = recuperarTexto("txtNombre");
let cedula = recuperarInt("txtCedula");
let genero = recuperarTexto("txtGenero");
let edad = recuperarInt("txtEdad");

let clienteModificado = {nombre,cedula,genero,edad};
modificarCliente(clienteModificado);

generarCliente();

}
