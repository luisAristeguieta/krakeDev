let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1756124792",nombre:"Luis",apellido:"Jimenez",sueldo:1000.0}
    
]

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