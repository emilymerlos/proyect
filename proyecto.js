var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

const precioBase = 250;
var mensajeRecargo = "";
var asegurado = 1;
var comision = precioBase * 0.30;
var recargos = 0;

var fecha = new Date();
var diaActual = fecha.getDate();
var mesActual = fecha.getMonth()+1;
var anioActual = fecha.getFullYear();

var edadAseguradoPrincipal = anioActual - anioNacimiento;
if(mesActual < mesNacimiento){
    edadAseguradoPrincipal--;
}
if((mesNacimiento == mesActual) && (diaActual < diaNacimiento)){
    edadAseguradoPrincipal--;
}

if(edadAseguradoPrincipal < 18){
    mensajeRecargo = "no puede ser asegurado dado que no es mayor a 18 años.";
    recargos = 0;
    asegurado = 0;
}else if(edadAseguradoPrincipal >= 18 && edadAseguradoPrincipal < 21){
    mensajeRecargo = "El asegurado no tiene ningun recargo."
    recargos = 0;
}else if(edadAseguradoPrincipal >= 21 && edadAseguradoPrincipal < 25){
    mensajeRecargo = "El asegurado tendra un recargo del 1%."
    recargos = precioBase * 0.01;
}else if(edadAseguradoPrincipal >= 25 && edadAseguradoPrincipal < 30){
    mensajeRecargo = "El asegurado tendra un recargo del 2%."
    recargos = precioBase * 0.02;
}else if(edadAseguradoPrincipal >= 30 && edadAseguradoPrincipal < 40){
    mensajeRecargo = "El asegurado tendra un recargo del 5%."
    recargos = precioBase * 0.05;
}else if(edadAseguradoPrincipal >= 40 && edadAseguradoPrincipal < 50){
    mensajeRecargo = "El asegurado tendra un recargo del 8%."
    recargos = precioBase * 0.08;
}else if(edadAseguradoPrincipal >= 50 && edadAseguradoPrincipal <= 65){
    mensajeRecargo = "El asegurado tendra un recargo del 12%."
    recargos = precioBase * 0.12;
}else if(edadAseguradoPrincipal > 65){
    mensajeRecargo = "no puede ser asegurado por ser mayor de 65 años."
    recargos = 0;
    asegurado = 0;
}


if(asegurado == 1){
    var conyuge = prompt("¿Tiene cónyuge?", "SI/NO").toLowerCase();
    if(conyuge == "si"){
        var diaNacimientoConyuge = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
        var mesNacimientoConyuge = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
        var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
    }else{
        var mensajeRecargoConyuge = "El cliente no tiene conyuge.";
    }

    var hijos = prompt("¿Tiene hijos?", "SI/NO").toLowerCase();
    if(hijos == "si"){
    var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
    }else{
        var mensajeRecargoHijos = "El cliente no tiene Hijos.";
    }

    var edadConyuge = anioActual - anioNacimientoConyuge;
    if(mesActual < mesNacimientoConyuge){
        edadConyuge--;
    }
    if((mesNacimientoConyuge == mesActual) && (diaActual < diaNacimientoConyuge)){
        edadConyuge--;
    }


    // validaciones para recargos por el conyuge
    if(edadConyuge < 30){
        mensajeRecargoConyuge = "se sumara un recargo del 1%."
        recargos = recargos + (precioBase * 0.01);
    }else if(edadConyuge >= 30 && edadConyuge < 40){
        mensajeRecargoConyuge = "se sumara un recargo del 2%."
        recargos = recargos + (precioBase * 0.02);
    }else if(edadConyuge >= 40 && edadConyuge < 50){
        mensajeRecargoConyuge = "se sumara un recargo del 3%."
        recargos = recargos + (precioBase * 0.03);
    }else if(edadConyuge >= 50 && edadConyuge < 70){
        mensajeRecargoConyuge = "se sumara un recargo del 5%."
        recargos = recargos + (precioBase * 0.05);
    }else{
        mensajeRecargoConyuge = "no se sumaran recargos."
    }


    console.log("Cliente: " + nombreCompleto);
    console.log("Edad: " + edadAseguradoPrincipal + " años.");
    console.log("Por tener " + edadAseguradoPrincipal + " años, " + mensajeRecargo);
    if(conyuge != "si"){
        console.log("Por no tener conyuge no se sumaron recargos.");
    }else{
        console.log("Por tener " + edadConyuge + " años el/la conyuge, " + mensajeRecargoConyuge);
    }
    if(hijos != "si"){
        console.log("Por no tener hijos no se sumaron recargos.");
    }else{
        recargos = recargos + (precioBase * 0.01) * cantidadHijos;
        console.log("Por tener " + cantidadHijos + " Hijo/s, " + "se sumara un recargo del 1%.");
    }
    console.log("El total de recargos es de: " + recargos );

    var totalPagar = precioBase + comision + recargos;
    console.log("Total a pagar: " + totalPagar);
}
else{
    console.log("El cliente " + nombreCompleto + " " + mensajeRecargo);
}