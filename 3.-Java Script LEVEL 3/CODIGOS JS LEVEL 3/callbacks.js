//# Deconstruyendo los CallBacks:

/*
//$ ejemplo 1
function funcion_1(){funcion_2()};
function funcion_2() {console.log ("Hola, soy codigo de la funcion_2")};
funcion_1();

//$ ejemplo 2

function funcion_2() {console.log ("Hola, soy codigo de la funcion_2")};
function funcion_3() {console.log ("Hola, soy codigo de la funcion_3")};
function funcion_4() {console.log ("Hola, soy codigo de la funcion_4")};
function funcion_5() {console.log ("Hola, soy codigo de la funcion_5")};

//$ ejemplo 3


function funcion_1(){funcion_2(),funcion_3(),funcion_4(),funcion_5()};
funcion_1();


//$ ejemplo 4
function funcion_1(){funcion_2()};
function funcion_1(){funcion_3()};
function funcion_1(){funcion_4()};
function funcion_1(){funcion_5()};
funcion_1();



*/

/*
//# CALLBACK SINCRONO:

//$ ejemplo 1

function funcion_1(funcionComoParametro){};
function funcion_2(){console.log("Hola, soy una  funcion call Back")};
funcion_1(funcion_2());

//$ ejemplo 2

function funcion_3() {console.log ("Pero pude haber sido yo... la funcion_3")};
function funcion_4() {console.log ("Pero pude haber sido yo... la funcion_4")};
function funcion_5() {console.log ("Pero pude haber sido yo... la funcion_5")};

funcion_1(funcion_3());
funcion_1(funcion_4());
funcion_1(funcion_5());

*/

// //# CALLBACK ASINCRONO:
// //$ ejemplo 1:

function callbackFunction() {console.log("Buenas, soy una funcion callback")};
setTimeout(callbackFunction, 1000);

// //$ ejemplo 2:

setTimeout(function(){console.log("Que tal, no parece, pero si... soy un callBack")}, 500)

// //$ ejemplo 3:

setTimeout(() => {console.log("Si, yo tambien soy un CallBack")}, 200)

// document.queryselector("#callback-btn").addEventListener("click", function () {
//   console.log("El usuario ha hecho clic en el botón.");
// });
