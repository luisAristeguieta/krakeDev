saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido")
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("img","./imagenes/saludo1.gif");
    mostrarTextoEnCaja("txtNombre","")
}
