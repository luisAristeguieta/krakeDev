saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido")
}

recuperarTexto = function(idComponente){
    let valorIngresado;
    let componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}