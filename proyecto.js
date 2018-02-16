var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
	var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
	var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
	var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
	
	var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
	var hijos = prompt("¿Tiene hijos?", "SI/NO");
	var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;
	
var comision = precioBase * 0.30;

var recargos = 0;
var totalPagar = precioBase + comision + recargos;
document.write(totalPagar);

var recargoA = precioBase * 0.01;
var totalPagarA = precioBase + comision + recargoA;
document.write(totalPagarA);

var recargoB = precioBase * 0.02;
var totalPagarB = precioBase + comision + recargoB;
document.write(totalPagarB);

var recargoF = precioBase * 0.03;
var totalPagarF = precioBase + comision + recargoF;
document.write(totalPagarF);

var recargoC = precioBase * 0.05;
var totalPagarC = precioBase + comision + recargoC;
document.write(totalPagarC);

var recargoD = precioBase * 0.08;
var totalPagarD = precioBase + comision + recargoD;
document.write(totalPagarD);

var recargoE = precioBase * 0.12;
var totalPagarE = precioBase + comision + recargoE;
document.write(totalPagarE);


var userInput = Number(prompt("Ingrese edad del asegurado",));
document.write(userInput); 
console.log(userInput);
switch(userInput){
  case 18:
    document.write(totalPagar);     
    break;
    case 19:
    document.write(totalPagar);     
    break;
    case 20:
    document.write(totalPagar);     
    break;
    case 21:
    document.write(totalPagarA);     
    break;
    case 22:
    document.write(totalPagarA);     
    break;
    case 23:
    document.write(totalPagarA);     
    break;
    case 24:
    document.write(totalPagarA);     
    break;
    case 25:
    document.write(totalPagarB);     
    break;
    case 26:
    document.write(totalPagarB);     
    break;
    case 27:
    document.write(totalPagarB);     
    break;
    case 28:
    document.write(totalPagarB);     
    break;
    case 29:
    document.write(totalPagarB);
    case 30:
    document.write(totalPagarC);     
    break;
    case 31:
    document.write(totalPagarC);     
    break;
    case 32:
    document.write(totalPagarC);     
    break;
    case 33:
    document.write(totalPagarC);     
    break;
    case 35:
    document.write(totalPagarC);
    case 36:
    document.write(totalPagarC);     
    break;
    case 37:
    document.write(totalPagarC);     
    break;
    case 38:
    document.write(totalPagarC);     
    break;
    case 39:
    document.write(totalPagarC);
    case 40:
    document.write(totalPagarD);     
    break;
    case 41:
    document.write(totalPagarD);     
    break;
    case 42:
    document.write(totalPagarD);     
    break;
    case 43:
    document.write(totalPagarD);     
    break;
    case 45:
    document.write(totalPagarD);
    case 46:
    document.write(totalPagarD);     
    break;
    case 47:
    document.write(totalPagarD);     
    break;
    case 48:
    document.write(totalPagarD);     
    break;
    case 49:
    document.write(totalPagarD);
    case 50:
    document.write(totalPagarE);     
    break;
    case 51:
    document.write(totalPagarE);     
    break;
    case 52:
    document.write(totalPagarE);     
    break;
    case 53:
    document.write(totalPagarE);     
    break;
    case 55:
    document.write(totalPagarE);
    case 56:
    document.write(totalPagarE);     
    break;
    case 57:
    document.write(totalPagarE);     
    break;
    case 58:
    document.write(totalPagarE);     
    break;
    case 59:
    document.write(totalPagarE);
    case 60:
    document.write(totalPagarE);
    case 61:
    document.write(totalPagarE);     
    break;
    case 62:
    document.write(totalPagarE);     
    break;
    case 63:
    document.write(totalPagarE);     
    break;
    case 64:
    document.write(totalPagarE);
  default:
    documento.write("no es una edad valida");
}

var edad_del_conyugue = "29";

if (edad_del_conyugue < "30") 
{document.write(recargoA);}
else if (edad_del_conyugue >= "30" && edad_del_conyugue <= "39")
{document.write(recargoB);}
else if (edad_del_conyugue >= "40" && edad_del_conyugue <= "49")
{document.write(recargoF);}
else if (edad_del_conyugue >= "50" && edad_del_conyugue <= "69")
{document.write(recargoC);}

var recargoHijos = (precioBase * 0.01) * cantidadHijos;
document.write(recargoHijos);








