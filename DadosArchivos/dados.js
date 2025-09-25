jugar = function(){
   let aleatorio = lanzarDado();
   cambiarTexto("lblNumero",aleatorio);
    if (aleatorio>3){
        cambiarTexto("lblMensaje"," Es mayor a 3, Ganaste");
    } else {
        cambiarTexto("lblMensaje"," Es menor a 3, Perdiste");
    }
}

lanzarDado = function(){
  let valorAleatorio = parseInt(Math.random() * 6) + 1;
  return valorAleatorio; // Se hace la prueba de esta forma y funciona ok, retornando valores entre 1 y 6
}

/*No da un valor aleatorio entre 1 y 6
No recibe parametros
el valor aleatorio entre 1 y 6*/