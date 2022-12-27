/*
//# PROMESAS:
// sintaxis 1:
const promesa_1 = new Promise(() => {});

// sintaxis 2:
const promesa_2 = new Promise(function nameFunction(parameters){});
console.log(promesa_1);
console.log(promesa_2);


// ejemplo 1:
const promesa_1 = new Promise((exito, rechazo) => {
  const estado = true;
  if(estado){exito("La promesa fue exitosa ");}
  else{rechazo("La promesa fue rechazada");}
});
console.log(promesa_1);

// ejemplo 2:
const promesa_2 = new Promise((exito, rechazo) => {
  const estado = false;
  if(estado){exito("La promesa fue exitosa ");}
  else{rechazo("La promesa fue rechazada");}
});
console.log(promesa_2);
*/

//. Comportamiento de las promesas:
/*

function funcion() {console.log("Soy una funcion")}

const objeto = {
  1: "valor1",
  2: "valor2",
  3: "valor3",
}
var numero = 237;
let palabra = "Anacoreta";

// const estado = false;
// const estado = true;

// prueba 1 - funcion tradicional:
const promesa = new Promise((exito, rechazo) => {
  if(estado){exito(funcion)}
  else{rechazo(funcion)}
});
console.log(promesa);

// prueba 2 - funcion flecha:
const promesa = new Promise((exito, rechazo) => {
  if(estado){exito(()=>{console.log("algo1");})}
  else{rechazo(()=>{console.log("algo2");})}
});
console.log(promesa);


// prueba 3 - objeto:
const promesa = new Promise((exito, rechazo) => {
  if(estado){exito(objeto)}
  else{rechazo(objeto)}
});
console.log(promesa);

// prueba 4 - variable numerica:
const promesa = new Promise((exito, rechazo) => {
  if(estado){exito(numero)}
  else{rechazo(numero)}
});
console.log(promesa);


// prueba 5 - variable string:
const promesa = new Promise((exito, rechazo) => {
  if(estado){exito(palabra)}
  else{rechazo(palabra)}
});
console.log(promesa);

 */


//# METODO THEN:


//. sintaxis amable:

/*


//$ forma 1:

// // const estado = true;
// const estado = false;

// function seCumplio() {console.log("Me cumpli!");  }
// function noSeCumplio() {console.log("No me cumpli!");  }

// const promesa = new Promise((resolve, reject) => {
//     if (estado) {resolve()}
//     else{reject()}
// });

//+ sintaxis 1:
  // promesa.then(seCumplio,noSeCumplio);

//+ sintaxis 2:
  // promesa
    // .then(seCumplio,noSeCumplio);


//$ forma 2:

const estado = true;
// const estado = false;

const promesa = new Promise((resolve, reject) => {
    if (estado) {resolve('Esto se muestra si la promesa se cumple');}
    else{reject("Esto se muestra si la promesa no se cumple");}
});

//+ opcion 1:
  // promesa.then(value =>{console.log(value)} , er => { console.log(er)});

//+ opcion 2:
  // promesa
    // .then(value =>{console.log(value)} , er=>{ console.log(er)});

// //$ forma 3:

// const estado = true;
const estado = false;

const promesa = new Promise((resolve, reject) => {
    if (estado) {resolve('Esto se muestra si la promesa se cumple');}
    else{reject("Esto se muestra si la promesa no se cumple");}
});

promesa
  .then(value => { console.log(value) })
  .then(er => { console.log(er) })
    */


//. sintaxis rebuscada:
// const estado = true;
// const estado = false;

// const promesa = new Promise((resolve, reject) => {
//     if (estado) {resolve('Esto se muestra si la promesa se cumple');}
//     else{reject("Esto se muestra si la promesa no se cumple");}
// });


// // forma 1:
// promesa.then(value=>{console.log(value);},[null,er=>{console.log(er);}]);

// // forma 2:
// promesa.then(value=>{console.log(value);},[undefined,er=>{console.log(er);}]);

// // forma 3:
// promesa.then(value=>{console.log(value);},[0,er=>{console.log(er);}]);

// // forma 4:
// promesa.then(value=>{console.log(value);},[NaN,er=>{console.log(er);}]);

// // forma 5:
// promesa.then(value=>{console.log(value);},[false,er=>{console.log(er);}]);

// // forma 6:
// promesa.then(value=>{console.log(value);},["",er=>{console.log(er);}]);

// // forma 7:
// promesa.then(value=>{console.log(value);},[er=>{console.log(er);}]);


// promesa.then(value=>{console.log(value);},er=>{console.log(er);});


//# Promise all:
/*

//$ Ejemplo 1:
const estado1 = true;
const estado2 = true;
const estado3 = true;
const promesa1 = new Promise((resolve, reject) => {
  if (estado1) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa no se cumple");}
});
const promesa2 = new Promise((resolve, reject) => {
  if (estado2) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa no se cumple");}
});
const promesa3 = new Promise((resolve, reject) => {
  if (estado3) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa no se cumple");}
});

Promise.all([promesa1, promesa2, promesa3]).then(values => {
console.log(values); 
});





//$ Ejemplo 2:

const estado1 = true;
const estado2 = false;
const estado3 = true;
const promesa1 = new Promise((resolve, reject) => {
  if (estado1) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa 1 no se cumple");}
});
const promesa2 = new Promise((resolve, reject) => {
  if (estado2) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa 2 no se cumple");}
});
const promesa3 = new Promise((resolve, reject) => {
  if (estado3) {resolve('Esto se muestra si la promesa se cumple');}
  else{reject("Esto se muestra si la promesa 3 no se cumple");}
});

Promise.all([promesa1, promesa2, promesa3]).then(values => {
console.log(values); 
});


 */






