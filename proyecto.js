var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

// var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
// var hijos = prompt("¿Tiene hijos?", "SI/NO");
// var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;
	
var comision = precioBase * 0.30;

var recargos = 0;

var fecha = new Date();
var anioActual = fecha.getFullYear();

var edadAseguradoPrincipal = anioActual - anioNacimiento;

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

console.log("Cliente: " + nombreCompleto);
console.log("Edad: " + edadAseguradoPrincipal + " años.");
console.log("Por tener " + edadAseguradoPrincipal + " años, " + mensajeRecargo);
console.log("El total de recargos es de: " + recargos );

var totalPagar = precioBase + comision + recargos;
console.log("Total a pagar: " + totalPagar);