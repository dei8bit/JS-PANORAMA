//# CONSOLA:
//+ Una ventana capaz de brindarnos muchas utilidades en el ambito de la depuracion.
/*

//_ Metodos de registro:

//, assert: 
//+ muestra un mensaje si la condicion es falsa
// console.assert(5>3);
// console.assert(5<3); 

//, clear: 
//+ limpia la consola
console.log(2+2);
console.log("buenas tardes");
console.error("CONSOLA SUPER SUCIA");
console.log(7*86);
console.clear();


//, error:
//+  Muestra un mensaje mennsaje de error.

console.error(2);
console.error("ERROR FATAL VA A EXPLOTAR LA GALAXIA ENTERA");
console.error(function name(parametros) {});


//, info:
//+  Muestra un mensaje mennsaje informativo.
console.info("buenas tardes");
console.info(2+2);
console.info(["good","afternoom"]);


//, log:
// //+  Muestra un mensaje mennsaje de depuracion.
console.log("buenas tardes");
console.log(2+2);
console.log(personas = ["buenas","tardes"]);


//, table: 
//+ Tabla ordenada  que recibe un parametro objeto y devuelve una tabla con el par clave-valor.
// console.table(["azul","rojo","amarillo","verde","violeta"]);
// console.table([88,77,66,44]);

//, warn: 
// + Muestra un mensaje de advertencia.
console.warn("CUIDADITO CON ESO");
console.warn(89-88);
console.warn(true);
console.warn(false);
console.warn(0);

//, dir: 
//+ muestra las propiedades de un objeto.
//$ Ejemplo 1:
arreglo = [1,2,3];
console.log(arreglo);
console.dir(arreglo);

//$ Ejemplo 2:
const saludar = function (nombre) {console.log(`hola${nombre}` )};
console.log(saludar);
console.dir(saludar);


//_ Metodos de conteo:

//, count :
//+ Permite contar cuantas veces se llama a count a partir de 1
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.count("jeje");
console.count("jeje");
console.count("jeje");
console.count("jeje");
console.count(2*2-4+9/3);
console.count(2*2-4+9/3);
console.count(2*2-4+9/3);

//, countReset: 
//+ Reinicia el valor del count.
console.count();
console.count();
console.count();
console.count();

console.countReset();

console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");

console.countReset("contador");

//_ Metodos de agrupacion:

//, group : 
//$ Ejemplo 1:
// +Crea un grupo con una variable opcional.
console.log("afuera del grupo");
console.group("PRIMER GRUPO");
console.warn("que nada salga de aqui!")
  console.log("adentro del grupo");

//$ Ejemplo 2:
console.group("sistema solar");
console.log("planetas");
console.group("planeta tierra");
console.log("humanos");
console.group("continentes");
console.log("paises");

//, group: 
//+ Elimina el grupo anterior mas proximo.
//$ Ejemplo 1:
console.group("Actuales admitidos");
console.log("pepe");
console.log("jorje");
console.log("horacio");
console.group("Futuros admitidos");
console.log("Rodrigo Ravioli");
console.log("Fabian Kakichiki");
console.log("Samuel Perinango");
console.groupEnd();
console.log("Rodrigo Ravioli");
console.log("Fabian Kakichiki");
console.log("Samuel Perinango");


//, groupCollapsed: 
//+ Crea un grupo colapsado desde el inicio.
//$ Ejemplo 1:

console.group("GRUPO ABIERTO");
console.warn("ESTE GRUPO ESTA ABIERTO");
console.groupEnd();
console.groupCollapsed("GRUPO CERRADO");
console.warn("ESTE GRUPO ESTA CERRADO");
console.warn("Por eso no se puede ver este mensaje");



//, time - timeLog - timeEnd:  
//+ time:     inicia un temporizado  
//+ timeLog:  Muestra el tiempo que transcurrio un temporizador
//+ timeEnd:  Finaliza un temporizador y muestra su duracion total.

//$ Ejemplo1:
console.time();
console.timeLog();
console.timeEnd();


//$ Ejemplo2:

console.time("TEMPORIZADOR");
console.log("Mensajes entre medio");
console.warn("Advertencia entre medio");
console.error("Errores entre medio");
console.timeLog("TEMPORIZADOR");
console.log("Mas Mensajes entre medio");
console.warn("Mas Advertencia entre medio");
console.error("Mas Errores entre medio");

console.timeEnd("TEMPORIZADOR");


//$ Ejemplo3:

console.time("Tempo 1");
for (let i = 0; i < 999999; i++) {const element = i};
console.time("Tempo 2");
console.timeLog("Tempo 1");
for (let i = 0; i < 999999; i++) {const element = i};
console.timeLog("Tempo 2");
console.timeEnd("Tempo 1");
console.timeEnd("Tempo 2");
 */
