//# Condicionales:
//+ Permiten ejecutar una instruccion de codigo a partir de una condicion.


/*
//. if:
//+ Solo se ejecuta cuando la condicion es verdadera

if (true) {alert("esto se muestra porque el condicional es true")};

if (false) {alert("esto  no se muestra porque el condicional es false")};


//. ELSE :
//+ Solo se ejecuta cuando la condicion de un if no se cumple.-
if(3>4)console.log("tres es mayor a 4");  ///cuando tenemos  condicionales de una sola linea!! en condicionales podemos omitir las llaves
else console.log("tres es menor que 4");

//. ELSE IF :
//+ Se ejecutan cuando tanto un if como un else no se cumplen pudiendo agregar una condicion mas.

let nombre = prompt("ingrese su nombre");
if (nombre == "rodolfo")console.log(" tu nombre es " + nombre);
else if (nombre == "gerardo") console.log(" tu nombre es " + nombre);
else console.log(" tu nombre no es ni rodolfo ni gerardo pero es: " + nombre);

//. Operador Ternario:
//+ Permite establecer condicionales if y else  pero con una sintaxis resumida.

let num1= 2;
let num2= 4;
console.log("el numero mayor es " + ((num1>num2) ? num1 : num2));

//. loose Y strict:
//, loose:
//+ evalua solo valor sin tener en cuenta el tipo de dato.
console.log(2 == "2");
//, strict
//+ evalua el valor y  tambien el tipo de dato.
console.log(2 === "2");

//. Valores Truthy Y Falsey:

//, valores falsey:

const valor1 = 0;
const valor2 = "";
const valor3 = false;
const valor4 = null;
const valor5 = undefined;

//, valores truthy:
const valor6 = 2;
const valor7 = "HOLA";
const valor8 = [];
const valor9 = function () {};
const valor10 = {};

if (valor1) console.log("truthy")
else console.log("falsey")
if (valor2) console.log("truthy")
else console.log("falsey")
if (valor3) console.log("truthy")
else console.log("falsey")
if (valor4) console.log("truthy")
else console.log("falsey")
if (valor5) console.log("truthy")
else console.log("falsey")
if (valor6) console.log("truthy")
else console.log("falsey")
if (valor7) console.log("truthy")
else console.log("falsey")
if (valor8) console.log("truthy")
else console.log("falsey")
if (valor9) console.log("truthy")
else console.log("falsey")
if (valor10) console.log("truthy")
else console.log("falsey")

console.log(`el valor de "${valor1}" es: ${((valor1) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor2}" es: ${((valor2) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor3}" es: ${((valor3) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor4}" es: ${((valor4) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor5}" es: ${((valor5) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor6}" es: ${((valor6) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor7}" es: ${((valor7) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor8}" es: ${((valor8) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor9}" es: ${((valor9) ? "truthy" : "falsey")}`);
console.log(`el valor de "${valor10}" es: ${((valor10) ? "truthy" : "falsey")}`);

//.Switch:
//+ Permite agrupar varios casos para una condicion. 

//$ Ejemplo 1:
const numero = 0;
switch (numero) {
  case 0:
    console.log("el numero es cero");
  case 1:
    console.log("el numero es uno");
  case 2:
    console.log("el numero es dos");
}

//$ Ejemplo 2:

const numero = 2;
switch (numero) {
  case 0:
    console.log("el numero es cero");
  case 1:
    console.log("el numero es uno");
  case 2:
    console.log("el numero es dos");
}

//$ Ejemplo 3:

const numero = 0;
switch (numero) {
  case 0:
    console.log("el numero es cero");
    break;
  case 1:
    console.log("el numero es uno");
    break;
  case 2:
    console.log("el numero es dos");
    break;
}

//$ Ejemplo 4:

const numero = 5;
switch (numero) {
  case 0:
    console.log("el numero es cero");
    break;
  case 1:
    console.log("el numero es uno");
    break;
  case 2:
    console.log("el numero es dos");
    break;
  default:
    console.log("el numero no es ni cero, ni uno , ni dos");
}

//$ Ejemplo 5:

const numero = prompt("ingrese un numero");
switch (parseFloat(numero)) {
  case 2:
  case 4:
  case 6:
    console.log("el numero es dos , cuatro o seis");
    break;
  case 1:
  case 3:
  case 5:
    console.log("el numero es uno, tres o cinco");
    break;
  default:
    console.log("el numero no es ninguno de los anteriores");
}


 */
