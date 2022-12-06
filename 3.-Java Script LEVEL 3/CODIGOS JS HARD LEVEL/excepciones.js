
/*

//# EXCEPCIONES y ERRORES:
//+ Situaciones anomalas que desvian la ejecucion del flujo principal a un flujo alternativo.

//. Throw:
//+ throw permite arrojar cualquier objeto como error

//$  Ejemplos:
throw "ERROR MAXIMO"
throw 5<2;
throw 2<5;
throw [];
throw true;
throw 2+2;
throw function(){} ;
throw 5;

//* Throw interrumpe el flujo de un programa:
console.log("antes");
throw "ERROR SUPREMO";
console.log("Despues"); ///no se ejecuta nunca.

//$ Ejemplo Practico con throw:

const impares = [1,3,5,7,9,11,12,55,77];

for (let i = 0; i < impares.length; i++) {
if ((impares[i]%2) === 0) { 
    throw `${impares[i]} es un numero par :)`}
    else{console.log(`${impares[i]} es un numero impar`);}
}

//.try-catch:
//+ el bloque try-catch permite probar acciones y capturar errores.

function palabraApta(palabra) {
  try { 
    if(palabra == "")  throw "No ingresaste nada";
    if(!isNaN(palabra)) throw "No ingresaste una palabra";
    if(palabra.length == 1)   throw "Ingresaste solo una letra";
    if(palabra.length > 15)  throw "Palabra demasiado larga";
    else{console.log(palabra + " me parece una muy buena palabra");}
  }
  catch(err) {console.log(`ERROR!! ${err} `)}
  
}
palabraApta("");
palabraApta(85);
palabraApta("z");
palabraApta("aasdasdasdasdassd");
palabraApta("Apocrifo");

//.try-catch-finally:
//+ el bloque try-catch tambien permite probar acciones y capturar errores , finally se ejecuta siempre.

function coloresPrimarios(color) {
  var colores = ["rojo","amarillo","azul"]
  try{ 
    if (colores.indexOf(color) === -1) {throw `${color} no es un color primario`}
    else{console.log(`${color} es un color primario`);}}
  catch(er){console.log(er);}
  finally{ console.log("final de la funcion");}
}

coloresPrimarios("rojo");
coloresPrimarios("amarillo");
coloresPrimarios("azul");
coloresPrimarios("violeta");


//.try-finally:
//+ el bloque try-finally permite probar acciones y ejecutar algo siempre al final.

function coloresPrimarios(color) {
  var colores = ["rojo","amarillo","azul"]
  try{ 
    if (colores.indexOf(color) === -1) {console.log(`${color} no es un color primario`); }
    else{console.log(`${color} es un color primario`);}}
  finally{ console.log("final de la funcion");}
}

coloresPrimarios("rojo");
coloresPrimarios("naranja");

*/
