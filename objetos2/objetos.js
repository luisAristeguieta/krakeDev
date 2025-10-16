probarAtributo = function(){
    let persona = {
        nombre: "Luis",
        apellido : "Aristeguieta",
        edad : 35,
        mayorEdad : true,
    }
    console.log(persona.nombre);
    console.log(persona.apellido);

    if (persona.edad == NaN){
        console.log("No es un numero")
    } else {
        console.log("Es un numero")
    }

}

crearProducto = function(){
    let producto1 = {
        nombre : "Camote",
        precio : 3.7,
        stock : 65,
    }

    let producto2 = {
        nombre : "Uvas",
        precio : 5.9,
        stock : 7,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock){
        console.log("Hay mayor cantidad de " + producto1.nombre + " que de " + producto2.nombre)
    }
}

// modificacion de los atributos de un objetos
modificarAtributos = function(){
    let cuenta = {
        tipo: "Ahorro",
        numero: 210766933,
        saldo: 0,
    }
    cuenta.saldo = 10;
    cuenta.saldo +=120;
    console.log(cuenta.saldo);
}

// otra forma de asignar atributos a un objeto:
crearAtributo = function(){
    let cliente = {}
    cliente.nombre = "Luis";
    cliente.apellido = "Aristeguieta";
    cliente.edad = 35;
    cliente.genero = "Masculino";
}

// ejercicio de asignacion como parametro y retorno de un objeto en una funcion
// caso 1 incrementar el saldo de una cuenta / algebra.

// Paso 1 se crea una funcion que recibe objetos, el numero de cuenta como string y el saldo actual
// En esta funcion con parametros va interactuar con los atributos y mostrar la cuenta y el valor incrementado

aumentarSaldo = function(cuenta,monto){
    cuenta.valor-=monto;
}

// Paso 2 se crea la funcion que sera invocada "Sin parametros" pero que tiene los atributos que se usaran para
// la operacion algebraica, cabe destacar que se pasa el objeto completo y luego se especifica el atributo o
// atributos a que se quiere modificar en este caso la suma del valor del saldo.

ejecutarAumento = function(){
    let cliente = {numero:"25289810",valor:80}
    aumentarSaldo(cliente,50); // Aca se le pasan el objeto y el valor a modificar
    console.log(cliente.valor);
}

// Otro ejercicio que usa objetos, aplica condiciones y realiza retornos
// Paso 1 se crea la funcion con parametros en este caso de objetos y se debe acceder a este atributo

determinarMayor = function(p1,p2){

    if (p1.edad>p2.edad){
        return p1;
    } else if (p1.edad<p2.edad) {
        return p2;
    } else {
        return null;
    }
}

// Paso 2 se crea la funcion a invocar, se agregan los atributos y se invoca la funcion del paso 1

ejecutarMayor = function(){
    let pers1 = {nombre: "Juan", edad:35}
    let pers2 = {nombre: "Albert", edad:28}
    let resultado = determinarMayor(pers1,pers2);
    //console.log(resultado);

    if (resultado == null){
        console.log("La persona mayor es: " + resultado.nombre)
    }
}



