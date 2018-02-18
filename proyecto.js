var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

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
 var diaNacimientoHijos = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
    var mesNacimientoHijos = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
    var anioNacimientoHijos = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
}else{
    var mensajeRecargoHijos = "El cliente no tiene Hijos.";
}
  
const precioBase = 250;
	
var comision = precioBase * 0.30;

var recargos = 0;

var fecha = new Date();
var anioActual = fecha.getFullYear();

var edadAseguradoPrincipal = anioActual - anioNacimiento;
var edadConyuge = anioActual - anioNacimientoConyuge;
var edadHijos = anioActual - anioNacimientoHijos;

var mensajeRecargo = "";

if(edadAseguradoPrincipal < 18){
    mensajeRecargo = "No puede ser asegurado dado que no es mayor a 18 años.";
    recargos = 0;
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
    mensajeRecargo = "Ya no puede ser asegurado por motivos de edad."
    recargos = 0;
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

// validaciones para recargos por cantidad de Hijos
if(edadHijos < 21){
    mensajeRecargoHijos = "se sumara un recargo del 1%."
    recargos = recargos + (precioBase * 0.01) * cantidadHijos;
}else{
    mensajeRecargoHijos = "no se sumaran recargos."
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
    console.log("Por tener " + cantidadHijos + " Hijo/s, " + mensajeRecargoHijos);
  }
console.log("El total de recargos es de: " + recargos );

var totalPagar = precioBase + comision + recargos;
console.log("Total a pagar: " + totalPagar);