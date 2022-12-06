//# BLUCES:
//+ Permiten realizar acciones repetidas veces.

/*
//,while:
//+ Se ejecuta mientras se cumple una condicion
//$ Ejemplo 1:
let numero = 0;
while (numero < 10) {
  document.write(numero + " ");
  numero++;
}

//, do while:
//+ Se ejecuta mientras se cumple una condicion , pero primero ejecuta el codigo de  "do" si o si.
//$ Ejemplo 1:
let numero = 1;
do {
  console.log("me ejecuto si o si");
  numero++;
} while (numero < 0);




//,for:
//+ Se ejecuta hasta terminar de cumplir una condicion.

//$ Ejemplo 1:
for (let i = 0; i <= 4; i++) {document.write(i + " ")}

//$ Ejemplo 2:
for (let i = 10; i >= 5; i--){document.write(i + " ")}



//, for of:
//+ Devuelve los valores de un objeto

//$ Ejemplo 1:
const nombres_griegos = ["Ina","Fannie","Gemina", "Hera","Hatria","Finn"];
for (const nombre of nombres_griegos) {console.log(nombre)}

//$ Ejemplo 2:
const numeros = [1,2,3];
for (const nombre of numeros) {console.log(nombre + 10)}


//,for in:
//+ Devuelve las claves de un objeto

//$ Ejemplo 1:
bebidas = ["cafe","te","jugo","cerveza","limonada"];
for (var bebida in bebidas) {document.write(bebida + " ")}

//, deconstruccion:
bebidas = ["cafe","te","jugo","cerveza","limonada"];
for (const bebida in bebidas) {document.write(bebida + 1 + " ")}
for (const bebida in bebidas) {console.log(typeof(bebida))}

bebidas.bebida_Clave = "Vino";
for (const bebida in bebidas) {console.log  (bebida+ "---> "+ bebidas[bebida])}


//,break
//+ Interrumpe un bucle si se cumple una condicion.
let numero = 1;
while (numero < 100) {
  document.write(numero + " ");
  numero++;
  if (numero >= 15) {
    document.write("me interrumpi ☺");
    break;
  }
}


//,continue:
//$ Ejemplo 1:
for (let index = 0; index < 10; index++) {if (index == 5) {continue}
    document.write(index + " ");}

//$ Ejemplo 2:
for (let index = 0; index < 10; index++) {if (index <= 3 || index >= 7 ) {continue}
    document.write(index + " ");}



//,sentencia label:
//+ Permite etiquetar un bucle para referenciarlo y darle un tratamiento posterior.

//$ Ejemplo 1:
etiquetaReferenciable: {
  console.log('hola!');
  break etiquetaReferenciable;
  console.log('Queria decirte...');
}
console.log('adios');

//$ Ejemplo 2 :

lista = ["eustaquio", "teodoro", "piter", "alejandro", "calamardo"];

listaFiltro: for (let i = 0; i < lista.length; i++) {
  if (lista[i] != "piter") {
    console.log(` invitado ${lista[i]} aceptado`);
  } else {
    continue listaFiltro;
  }
}

*/
