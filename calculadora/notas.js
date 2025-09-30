calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("Error");
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("Error");
        } else {
            nota3 = recuperarFloat("txtNota3");
        } if (isNaN(nota3)) {
            alert("Error");
        } else {
            resultado = calcularPromedio(nota1, nota2, nota3);
            resultadoFormato = resultado.toFixed(2);
            mostrarTexto("lblResultado", resultadoFormato);
        }
    }
}

calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "Debe Ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError1", "");
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "Debe Ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError2", "");
    }

    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "Debe Ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError3", "");
    }

    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    if (esnotaValida(nota1,"lblError1") & esnotaValida(nota2,"lblError2") & esnotaValida(nota3,"lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }
}

esnotaValida = function (nota, idComponente) {
        if (isNaN(nota)) {
            mostrarTexto(idComponente, "Debe Ingresar un numero");
            return false;
        } else {
            if (nota>=0 && nota <=10){
            mostrarTexto(idComponente,"");
            return true;
            } else {
                mostrarTexto(idComponente,"El numero debe estar entre 0 y 10")
            }
        }
}


