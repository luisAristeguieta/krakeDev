// Ejercicio # 1 crear funcion calcularTasaInteres 
// Que hace: indica el valor de la tasa de interes dependiendo del valor anual de la empresa
// Recibe: El valor Anual de la empresa.
// Retorna = Valor tasa a ortogar
calcularTasaInteres = function(ingresoAnual){
    let valorTasa;
        if (ingresoAnual < 300000){
            valorTasa = 16;
        } else if (ingresoAnual >= 300000 && ingresoAnual < 500000){
            valorTasa = 15;
        } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000){
            valorTasa = 14;
        } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000){
            valorTasa = 13;
        }   else {
            valorTasa = 12;
        }
    return valorTasa;
}
// Ejercicio # 2 Funcion calcularCapacidadDePago

calcularCapacidadDePago = function(edad,ingresos,egresos){
    let valorCuota;
    let sobra = ingresos-egresos;
    if (edad > 50 ){
        valorCuota = sobra * 0.3;
    } else {
        valorCuota = sobra * 0.4;
    }
    return valorCuota;
}

// Ejercicio # 3 Funcion calcularDescuento

calcularDescuento = function(precio,cantidad){
    let subtotal = precio * cantidad;
    let descuento;
        if (cantidad < 3){
            descuento = 0;
        } else if (cantidad >= 3 && cantidad <= 5){
            descuento = 0.02;
        } else if (cantidad >= 6 && cantidad <= 11){
            descuento = 0.03;
        } else {
            descuento = 0.04;
        }
    let valorDescuento = subtotal - (subtotal * descuento);
    return valorDescuento;
}

// Ejercicio # 4 Funcion determinarColesterolLDl
let edad = 23;
determinarColesterolLDl = function(nivelColesterol){
    let colesterolLDL;
    if ((edad < 19 && nivelColesterol < 110) || (edad >=20 && nivelColesterol < 100)){
        colesterolLDL = "Nivel saludable";
    } else {
        colesterolLDL = "Nivel No Saludable";
    }
    return colesterolLDL;
}

// Ejercicio # 5 validarClave
validarClave = function(clave){
    if (clave.length >= 8 && clave.length <= 16){
        return true;
    } else {
        return false;
    }
}

// Ejercicio # 6 Funcion esMayuscula
esMayuscula = function (caracter){
    let evaluarCaracter;
    if (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90){
        evaluarCaracter = true;
    } else {
        evaluarCaracter = false;
    }
    return evaluarCaracter;
}

// Ejercicio # 7 Funcion esMinuscula
esMinuscula = function(caracter){
    let evaluarCaracter;
    if ((caracter.charCodeAt() >= 97 && caracter.charCodeAt() <= 122) || (caracter.charCodeAt() == 160) 
    || (caracter.charCodeAt() == 130) || (caracter.charCodeAt() == 161) || (caracter.charCodeAt() == 162) 
    || (caracter.charCodeAt() == 163) ) {
        evaluarCaracter = true;
    } else {
        evaluarCaracter = false;
    }
    return evaluarCaracter;
}

// Ejericio # 8 Funcion  esDigito
esDigito = function(caracter){
    if (caracter.charCodeAt()>=48 && caracter.charCodeAt()<=57){
        return true;
    } else {
        return false;
    }
}

// Ejericio # 9 Funcion darPermiso
darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 || notaFisica >90 || notaGeometria >90){
        return true;
    } else {
        return false;
    }
}

// Ejericio # 10 Funcion otorgarPermiso
otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if ((notaMatematica>90 || notaFisica> 90) && notaGeometria>80){
        return true;
    } else {
        return false;
    }
}

// Ejericio # 11 dejarSalir
dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    if ((notaMatematica >90 || notaFisica>90 || notaGeometria >90 ) && (notaFisica>notaMatematica)){
        return true;
    } else {
        return false;
    }
}