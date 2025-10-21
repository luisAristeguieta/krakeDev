let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALEZ",sueldo:900.0},
    {cedula:"1756124792",nombre:"LUIS",apellido:"JIMENEZ",sueldo:1000.0}
    
]

let esNuevo = false;
let roles = []


/* Reto 50 Mostrar Rol. Crear funcion mostrarTotales y mostrar el resultado en Resumen*/

mostrarTotales = function(){

    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i=0;i<roles.length;i++){
        let objeto = roles[i];

        totalEmpleado += objeto.aporteEmpleado;
        totalEmpleador += objeto.aporteEmpleador;
        totalAPagar += objeto.valorAPagar;
    }
    mostrarTextoDiv("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTextoDiv("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTextoDiv("infoTotalPago", totalAPagar.toFixed(2));
    let totalNomina =  (totalEmpleado + totalEmpleador + totalAPagar)
    mostrarTextoDiv("infoTotalNomina", totalNomina.toFixed(2));
}

/* Reto 50 Mostrar Rol. Crear funcion mostrarRoles */

mostrarRoles = function(){

    let tabla;

    let cmpTabla = document.getElementById("tablaResumen");
    let encabezado = "<tr><th>CEDULA</th><th>NOMBRE</th><th>VALOR A PAGAR </th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>"
    tabla = `<table class="tabla-empleados">` + encabezado;
        for(let i=0;i<roles.length;i++){
            let objeto = roles[i];

            tabla+= "<tr>"
            tabla+= "<td>" + objeto.cedula+ "</td>"
            tabla+= "<td>" + objeto.nombre+ "</td>"
            tabla+= "<td>" + objeto.valorAPagar.toFixed(2)+ "</td>"
            tabla+= "<td>" + objeto.aporteEmpleado.toFixed(2)+ "</td>"
            tabla+= "<td>" + objeto.aporteEmpleador.toFixed(2)+ "</td>"
            tabla+="</tr>"
        }

    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}

/* Reto 50 Paso D: crear la funcion guardarRol  */

guardarRol = function(){
   
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorAporteEmpleador = calcularAporteEmpleador(sueldo);

    rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorAPagar = valorAPagar;
    rol.aporteEmpleado = aporteEmpleado;
    rol.aporteEmpleador = valorAporteEmpleador;

    agregarRol(rol);

    habilitarComponente("btnBuscar");
    deshabilitarComponente("btnGuardarRol");
    deshabilitarComponente("btnCalcular");
    mostrarTextoEnCaja("txtBusquedaCedulaRol","");
    mostrarTextoDiv("infoCedula","");
    mostrarTextoDiv("infoNombre","");
    mostrarTextoDiv("infoSueldo","");
    mostrarTextoEnCaja("txtDescuentos",0)
    mostrarTextoDiv("infoIESS","0.0");
    mostrarTextoDiv("infoPago","0.0");
}


/* Reto 50 Paso C: Crear la funcion calcularAporteEmpleador  */

calcularAporteEmpleador = function(sueldo){
    let valorEmpleadorIess = (sueldo * 0.1115);
    return valorEmpleadorIess;
}

/* Reto 50 Paso B: agregar el objeto al arreglo si no existe un numero de cedula repetido. Mostrar el resultado */

agregarRol = function(rol){
    let rolExistente = buscarRol(rol.cedula);

    if (rolExistente == null) {
        roles.push(rol);
        alert("Rol agregado exitosamente para la cedula: " + rol.cedula);
    } else {
        alert("Ya existe un rol para la cedula: " + rol.cedula);
    }
}

/* Reto 50 Paso A: Habilitar y deshabilitar el boton guardar. Crear la funcion buscarRol que busca con el numero 
de cedula y devuelve un objeto si lo encuentra o null si no encuentra el empleado. */

buscarRol = function(cedula){
let objeto;
let empleadoEncontrado2 = null;

    for (let i=0 ; i<roles.length ; i++){
        objeto = roles[i];

        if(objeto.cedula == cedula){
            empleadoEncontrado2 = objeto;
            break;
        }
    }
    return empleadoEncontrado2;
}



calcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");

    if (isNaN(sueldo) || sueldo< 0 ){
        alert("Sueldo Incorrecto");
        return;
    } else if (isNaN(descuentos)){
        alert ("El valor de descuento debe ser un numero")
        return;
    } else {
        let aporteEmpleado = calcularAporteEmpleado(sueldo);
        mostrarTextoDiv("infoIESS",aporteEmpleado);
        let valorAPagar = calcularValorAPagar(sueldo,aporteEmpleado,descuentos);
        mostrarTextoDiv("infoPago",valorAPagar);
        habilitarComponente("btnGuardarRol");
    } 
}

calcularValorAPagar = function(sueldo,aporte,descuento){
let pagarEmpleado =  sueldo - aporte - descuento;
return pagarEmpleado;
}

calcularAporteEmpleado =  function(sueldo){
let aporteEmpleado =  sueldo * 0.0945
return aporteEmpleado;
}

/* Reto 49 a Crea la funcion buscarPorRol, solo extrae los valores de los empleados, se adiciona la limpieza 
de las cajas y en el caso que se correcto mostrar los datos empleados y limpia, en el caso de no muestra el 
error y limpia*/

buscarPorRol =  function(){
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);

    if (empleado != null){
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoNombre",empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
        mostrarTextoEnCaja("txtBusquedaCedulaRol","");
        mostrarTextoEnCaja("txtDescuentos",0)
        mostrarTextoDiv("infoIESS","0.0");
        mostrarTextoDiv("infoPago","0.0");
        deshabilitarComponente("btnBuscar");
        habilitarComponente("btnCalcular");
    } else {
        alert("No Existe registro de la cedula nro: " + cedula);
        mostrarTexto("infoCedula","");
        mostrarTexto("infoNombre","");
        mostrarTexto("infoSueldo","");
        mostrarTextoEnCaja("txtDescuentos",0)
        mostrarTextoDiv("infoIESS","0.0");
        mostrarTextoDiv("infoPago","0.0");

    }
    
}


/* Parte del reto # 48, crear el boton limpiar */

limpiar =  function(){
    esNuevo = false;
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo","");
    mostrarTextoEnCaja("txtBusquedaCedula","");
    deshabilitarComponente("btnGuardar");
}

/* Reto 48: Modificar Empleado, crear una funcion que muestre si encuentra algun empleado existente por el atributo 
de la cedula poder recuperar la informacion y permitir modificarla, caso que no exista mostrar no Existe
 */

ejecutarBusqueda =  function(){
   
    let busquedadCedula = recuperarTexto("txtBusquedaCedula");
    let empleadoBuscado = buscarEmpleado(busquedadCedula);;

    if (empleadoBuscado == null ){
        alert("Empleado No Existe")
        mostrarTextoEnCaja("txtCedula","");
        mostrarTextoEnCaja("txtNombre","");
        mostrarTextoEnCaja("txtApellido", "");
        mostrarTextoEnCaja("txtSueldo","");
    } else {
        mostrarTextoEnCaja("txtCedula",empleadoBuscado.cedula);
        mostrarTextoEnCaja("txtNombre",empleadoBuscado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleadoBuscado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        esNuevo = false;
    }

}

/* Paso 5: Crear una funcion que deshabilite las cajas de texto y el boton guardar*/

deshabilitarAlGuardar = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

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

        if(esNuevo == true){

            let clienteNuevo = {cedula,nombre,apellido,sueldo};
            let agregoCliente = agregarEmpleado(clienteNuevo);

            if(agregoCliente == true){
                alert("Empleado Guardado Correctamente");
                mostrarEmpleados();
                // Si guarda correctamente deshabilitar las cajas de texto y el boton guardar:
                deshabilitarAlGuardar();
                // Parte del reto 48: cambiar a false la variable esNuevo cuando se guarda un empleado nuevo.
                esNuevo = false;
                mostrarTextoEnCaja("txtCedula","");
                mostrarTextoEnCaja("txtNombre","");
                mostrarTextoEnCaja("txtApellido", "");
                mostrarTextoEnCaja("txtSueldo","");
                mostrarTextoEnCaja("txtBusquedaCedula","");
                
            } else {
            alert("Ya existe un empleado con  el numero de cedula :" + cedula);
            }

        } else {

            let empleadoEncontrado = buscarEmpleado(cedula);

             if (empleadoEncontrado != null) {
                empleadoEncontrado.nombre = nombre;
                empleadoEncontrado.apellido = apellido;
                empleadoEncontrado.sueldo = sueldo;

                alert("Empleado modificado exitosamente");
                mostrarEmpleados();
                deshabilitarAlGuardar();
                mostrarTextoEnCaja("txtCedula","");
                mostrarTextoEnCaja("txtNombre","");
                mostrarTextoEnCaja("txtApellido", "");
                mostrarTextoEnCaja("txtSueldo","");
                mostrarTextoEnCaja("txtBusquedaCedula","");
            } else {
                alert("Error: el empleado no existe");
            }
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
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
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
    deshabilitarAlGuardar();
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    deshabilitarComponente("btnCalcular");
    // mostrarRoles();

}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
}