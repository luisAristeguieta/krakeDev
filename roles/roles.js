let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1756124792",nombre:"Luis",apellido:"Jimenez",sueldo:1000.0}
    
]

let esNuevo = false;

/* Paso 4 Agregar funcion Guardar, Servira para crear un empleado como modificar uno existente, realizando las 
validaciones en la caja de texto cedula (Tener 10 caracteres todos numericos)/ nombre y apellido en mayusculas y
al menos 3 letras, y el sueldo entre 400 y 5000 incluidos, 

*/

guardar = function(){

let cedula = recuperarTexto("txtCedula");
let nombre = recuperarTexto("txtNombre");
let apellido = recuperarTexto("txtApellido");
let sueldo = recuperarFloat("txtSueldo");

let evaluarCedula = true;
let evaluarNombre = true;
let evaluarApellido = true;
let evaluarSueldo = true;
/* Teniendo como sentido que cuando hay algun error es false y cuando cumple con todo es true se tiene: se declara
inicialmente que todo esta verdadero y que si cumple con lo asignado no mostrara error, caso contrario mostrara el
error encontrado y especificando cual es el error, se busca primero el error y se va mostrando de acuerdo al orden 
de como aparece antes de recorrer la cadena de texto se evalua si no esta vacio y que tenga la cantidad de 
caracteres, luego se evalua que todo sea numerico, y romper con la evaluacion si consigue algun caracter distinto*/

// 
if ( isNaN(sueldo) || sueldo<400 || sueldo>5000){
    mostrarTexto("lblErrorSueldo","El Sueldo es obligatorio y debe ser un valor entre 400 y 5000");
    evaluarSueldo = false; 
} else {
    evaluarSueldo = true;
    mostrarTexto("lblErrorSueldo","");
}


if (apellido == "" || apellido.length < 3){
    mostrarTexto("lblErrorApellido","El Apellido es obligatorio y debe tener al menos 3 letras");
    evaluarApellido = false; 
} else {
    for(let i=0 ; i<apellido.length ; i++){
        let caracter = apellido.charAt(i);
        
        if(esMayuscula(caracter) == false){
            mostrarTexto("lblErrorApellido","Solo se permiten Letras Mayusculas");
            evaluarApellido = false;
            break;
        }
    }

    if (evaluarApellido == true){
        mostrarTexto("lblErrorApellido","")
    }
}

if (nombre == "" || nombre.length < 3){
    mostrarTexto("lblErrorNombre","El nombre es obligatorio y debe tener al menos 3 letras");
    evaluarNombre = false; 
} else {
    for(let i=0 ; i<nombre.length ; i++){
        let caracter = nombre.charAt(i);
        
        if(esMayuscula(caracter) == false){
            mostrarTexto("lblErrorNombre","Solo se permiten Letras Mayusculas");
            evaluarNombre = false;
            break;
        }
    }

    if (evaluarNombre == true){
        mostrarTexto("lblErrorNombre","")
    }
}

if (cedula == "" || (cedula.length < 10 || cedula.length > 11)){
    mostrarTexto("lblErrorCedula","El numero de Cedula es obligatorio y debe tener 10 Digitos");
    evaluarCedula = false; 
} else {
    for(let i=0 ; i<cedula.length ; i++){
        let caracter = cedula.charAt(i);
        
        if(esDigito(caracter) == false){
            mostrarTexto("lblErrorCedula","Solo se permiten numeros");
            evaluarCedula = false;
            break;
        }
    }

    if (evaluarCedula == true){
        mostrarTexto("lblErrorCedula","")
    }
}

// Si todo esta correcto estara true y se procede a continuar que es agregar un nuevo objeto al arreglo:

    if (evaluarCedula & evaluarNombre & evaluarApellido & evaluarSueldo){
        esNuevo = true;

        clienteNuevo = {cedula,nombre,apellido,sueldo};
        let agregoCliente = agregarEmpleado(clienteNuevo);

        if(agregoCliente == true){
            alert("Empleado Guardado Correctamente");
            mostrarEmpleados();
        // Si guarda correctamente deshabilitar las cajas de texto y el boton guardar:
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");
        } else {
            alert("Ya existe un empleado con  el numero de cedula :" + cedula)
        }
    }
}



    

/* Paso 3 Crear funcion agregarEmpleado recibiendo como parametro el empleado un objeto (cedula, nombre....)
agregara el nuevo objeto si no existe en el arreglo actual comparandolo con el atributo cedula de la funcion
buscarEmpleado */

agregarEmpleado = function(empleado){

let empleadoNuevo = buscarEmpleado(empleado.cedula);
    if (empleadoNuevo == null){
        empleados.push(empleado);
       // alert("Cliente Nuevo Agregado.");
        return true;
    } else {
     //   alert("El cliente con numero de cedula: " + empleadoNuevo.cedula + " ya se encuentra en la nomina")
        return false;
    }
}

/* Paso 2, Crear funcion buscarEmpleado con el atributo del numero de cedula como string, retornando el empleado
encontrado o valor null si no lo encuentra */

buscarEmpleado = function(cedula){

let objeto;
let clienteEncontrado = null;

    for ( let i=0; i<empleados.length ; i++){
        objeto = empleados[i];
        
        if(objeto.cedula == cedula){
            clienteEncontrado = objeto;
            break;
        }
    }
    return clienteEncontrado;
}

/* Reto 47: A. habilitar y deshabilitar componentes. Al cargar empleados se deshabilita las cajas de texto y boton
GUARDAR, 

Paso 1 agregar variable global esNuevo con valor false, sirve para saber si se esta ingresando un nuevo registro 
o modificando uno existente y agregar una funcion ejecutarNuevo para testear la variable recien creada y invocarla
desde el boton Nuevo
 */

ejecutarNuevo = function(){
    esNuevo=true;
    console.log(esNuevo);
}

/* Agregar un objeto mas al arreglo global y crear una funcion mostrarEmpleados que muestre la tabla 
en el id de div correspondiente y invcocarla en la funcion mostrarOpcionEmpleado */

mostrarEmpleados = function(){

let cmpTabla = document.getElementById("tablaEmpleados");
let encabezado = "<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>"
let tabla = `<table class="tabla-empleados">` + encabezado;
let elemento;

    for(let i=0 ; i<empleados.length ; i++){
        elemento = empleados[i];
        tabla+= "<tr>" 
        tabla+= "<td>"+ elemento.cedula+"</td>"
        tabla+= "<td>"+ elemento.nombre+"</td>"
        tabla+= "<td>"+ elemento.apellido+"</td>"
        tabla+= "<td>"+ elemento.sueldo+"</td>"
        tabla+= "</tr>"
    }

tabla+="</table>"
cmpTabla.innerHTML = tabla;

}

/* Del utilitario usar mostrar y ocultar compenente. En la funcion mostrarOpcionEmpleado al presionar el boton
empleado se muestra el divEmpleado y se oculta divRol y divResumen. Aplicar esto a los botones Rol y Resumen */

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
   /* deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");*/
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}