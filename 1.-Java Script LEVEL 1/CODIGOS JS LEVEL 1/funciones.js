//# FUNCIONES:
// + Permiten englobar codigo y utilizarlo las veces necesarias.

/*
//. Funciones Tradicionales:

//$ Ejemplo 1:
//- ejemplo sin parametros
function saludo(){console.log("hola humano")}
saludo();



//$ Ejemplo 2:
//- ejemplo con parametros
  function cuadrado(num){return (num * num)};
  console.log(cuadrado(2));
  console.log(cuadrado(8));

//$ Ejemplo 3:
//- revisando scope de funciones

function suma(num1, num2) {
  let res = num1 + num2;
  console.log(res);
}
suma(); //NaN
suma(12, 35); //47
suma(12, -35); //-23
suma(0, 35); // 35
console.log(num1); //no lo devuelve porque no esta definida afuera.

//$ Ejemplo 4:
//- parametros por defecto

function sumaPredefinida(num1 = 2, num2 = 2) {
  let res = num1 + num2;
  console.log(res);
}
sumaPredefinida(); 
sumaPredefinida(3,6); 


//. Funciones Anonimas:
//+ Permiten asignar la funcion a multiples variables.

//$ Ejemplo 1:
const funcionAnonima = function (nombre) {return "hola " + nombre};
console.log(funcionAnonima("pedro"));
saludo = funcionAnonima("jorje");
console.log(saludo);


//$ Ejemplo 2:
multiplicacionTriple = function (n1,n2,n3) {return n1*n2*n3};

function variasMultiplicaciones(funcionComoParametro) {
  console.log(funcionComoParametro(1,1,1));
  console.log(funcionComoParametro(2,4,5));
  console.log(funcionComoParametro(2,3,2));
}
variasMultiplicaciones(multiplicacionTriple);






//. Funciones flechas:
//+ Poseen una sintaxis mas sintetica en la declaracion. 

//$ Ejemplo 1:
  const resta = (n1,n2) => {return n1-n2}
  console.log(resta(3,2));

//$ Ejemplo 2:
  const multiplicarPorDos = (numero) =>{return numero * 2}
  console.log(multiplicarPorDos(5));

//$ Ejemplo 3:
  const multiplicarPorDiez = (numero) =>{return (numero * 10)}
  console.log(multiplicarPorDiez(5));

//$ Ejemplo 4:
  const saludar = () =>{return "holis!"}
  console.log(saludar());

//$ Ejemplo 5:
  const sumar77 = numero =>numero+77
  console.log(sumar77(22));


//. Operador rest:
//+ Permite dejar abierta la capacidad de parametros que puede recbiir una funcion.
//$ Ejemplo 1:

function probandoRest_1(...argumentos) {console.log(argumentos);}
function probandoRest_2(...argumentos) {console.log(argumentos);}
function probandoRest_3(...argumentos) {console.log(argumentos);}

probandoRest_1(1);
probandoRest_1(1,2,3,4,5,6,7,8,9);
probandoRest_1("a");
probandoRest_1("a","b","c","d","e","f","g");

//$ Ejemplo 2.0:
function probandoRests(...argumentos) {console.log(argumentos);}

//$ Ejemplo 2.1:
probandoRests(probandoRest_1,probandoRest_2,probandoRest_3);
//$ Ejemplo 2.2:
probandoRests(()=>{},(...arg)=>{console.log(arg)},()=>{return 2+2});
//$ Ejemplo 2.3:
probandoRests(null,undefined,NaN,0,true,false);


//$ Ejemplo 2.4:
const name1 = "Hola, soy una constante";
var name2 = "Hola soy una variable";
let name3 = "Hola, soy otra variable";
probandoRests(name1,name2,name3);
//$ Ejemplo 2.5:
probandoRests([2,4,6,8],["w","x","y","z"],[[1,2,3],["a","b","c"]]);


//. Operador spread:
//+Permite dar un uso general a varios elementos individuales contenidos en un objeto iterable (string o array).

//$ Ejemplo 1:
//- Con arreglos:
const numeros = [1, 2, 3];
function sumar(a, b, c) {return a+b+c;}
console.log(sumar(...numeros));



//$ Ejemplo 2:
// //- Con strings:
// const palabra = "ola"

function mostrarLetras1(a, b, c) {console.log(a+b+c)}
function mostrarLetras2(a, b, c) {console.log(a+a+b+b+c+c)}
function mostrarLetras3(a, b, c, d) {console.log(a+b+c+d)}
mostrarLetras1(...palabra);
mostrarLetras2(...palabra);
mostrarLetras3(...palabra);

// //$ Ejemplo 3:
function mostrarLetras4(a, b, c) {console.log(a+b+c)}
function mostrarLetras5(a, b, c) {console.log(a,a+b,b+c,c)}
mostrarLetras4(..."hola");
mostrarLetras5(..."oso");



//. Funciones IIFE:
// + Son funciones que se ejecutan sin necesidad de invocarlas.

//$ Ejemplo 1:
//- ejemplo sin parametros

(function () { console.log("hola");})();
(()=> { console.log("hola");})();

//$ Ejemplo 2:
//- ejemplo con parametros

(function (nombre) { console.log(`Hola ${nombre}`);})("jorje");
((nombre)=> { console.log(`Hola ${nombre}`);})("pedro");




//$ Ejemplo 3:

a = "martin";
b = "eustaquio";

(function (nombre) { console.log(`Hola ${nombre}`);})(a);
((nombre)=> { console.log(`Hola ${nombre}`);})(b);
*/

//$ Ejemplo 4:

const variableExterna = ["cerveza","pan","vino"];

(function (variableInterna) {
    console.log(variableInterna);
  })(variableExterna);
  
  /*
  
*/
