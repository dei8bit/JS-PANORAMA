//# ARRAYS:
//+ Conjunto de elementos de uno o varios tipos de datos almacenados en una sola variable.

/*
//.Introduccion a los arrays:

//, Declaracion de un array:
//+ Un arreglo se declara entre "[]" - separando sus elementos con  "," 
const arrayDeclarado = ["hola",true,2,undefined,["dato1","dato2","dato3"]];
console.log(arrayDeclarado);

//, Acceder a elementos de un array:
//+ Se accede un array indicado el numero del elemento entre "[]"
const arrayDeclarado = ["1","a",2,true];
console.log(arrayDeclarado[0]);
console.log(arrayDeclarado[1]);
console.log(arrayDeclarado[2]);
console.log(arrayDeclarado[3]);
console.log(arrayDeclarado[4]);

//, Longitud de un array.
// //+ refleja la cantidad de elementos que hay en un array.
vocales = ["a","e","i","o","u"];
console.log(vocales.length);
console.log(vocales);


const  letras = ["a","z","R"];
console.log(letras);
primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);


//.Metodos con arrays:
//+ Permiten modificar los arrays de diversas formas.

//_ Añadir datos a un array:

//, unshift:
//+ Añade un elemento al principio

const  numeros = [1,2,3,4,5,6];
console.log(numeros); ///antes
numeros.unshift("hola");
console.log(numeros); ///despues

//, shift:
//+ elimina el primer elemento.
const  arraydeprueba = [1,2,3,4,5,6];
primerelemento = arraydeprueba.shift();
console.log(primerelemento);
console.log(arraydeprueba);

//, push:
//+ Añade un elemento al final
const  numeros = [1,2,3,4];
console.log(numeros); ///antes
numeros.push("hola");
console.log(numeros); ///despues

//, pop:
//+ elimina el ultimo elemento 
const  numeros = [1,2,3,4];
console.log(numeros);
ultimoelemento = numeros.pop();
console.log(ultimoelemento);
console.log(numeros);

//, splice:
//+ Añade o elimina opcionalmente uno o varios elementos a partir de una posición.

const  arraydeprueba = [1,2,3,4,5,6];
//$ Ejemplo1:
arraydeprueba.splice(2,0,"buenas");
console.log(arraydeprueba);
//$ Ejemplo2:
arraydeprueba.splice(2,0,"buenas","tardes");
console.log(arraydeprueba);
//$ Ejemplo3:
arraydeprueba.splice(2,2,"buenas","tardes");
console.log(arraydeprueba);

//, concat:
//+ Permite concatenar dos arrays.

const  letras1 = ["a","b","c"]; 
const  letras2 = ["d","e","f"];
concatenamiento1 = letras1.concat(letras2);
console.log(concatenamiento1);
concatenamiento2 = letras2.concat(letras1);
console.log(concatenamiento2);


//, Spread Operator:

//$ Ejemplo 1:
const  letras1 = ["a","b","c"]; 
const  letras2 = ["d","e","f"];

operacion1 = [...letras1,...letras2];
console.log(operacion1);

operacion2 = [...letras2,...letras1];
console.log(operacion2);

operacion3 = [...letras2,99,...letras1];
console.log(operacion3);

console.log(letras1);
console.log(letras2);

//$ Ejemplo 2:
const  numeros1 = [1,2,3]; 
const  numeros2 = [4,5,6];

operacion1 = [...numeros1,...numeros2];
console.log(operacion1);

operacion2 = [...numeros2,...numeros1];
console.log(operacion2);

operacion3 = [...numeros2,"HOLA",...numeros1];
console.log(operacion3);

console.log(numeros1);
console.log(numeros2);


//_ Recorrer un array:

//, at:
// + Permite acceder a los elementos de un array usando números enteros positivos o negativos.-

array_epico = ["buenas","tardes","magico","colega!"];
console.log(array_epico.at(0))
console.log(array_epico.at(1))
console.log(array_epico.at(-1));
console.log(array_epico.at(-2));




//,forEach:
//+ ejecuta una funcion a cada elemento de un array.

const comidas = ["milanesa","medallon","guiso","croqueta"];

//$ Ejemplo 1:
comidas.forEach( (elem) =>{console.log(elem)});

//$ Ejemplo 2:
comidas.forEach( (elem,index) =>{console.log(elem,index)});

//$ Ejemplo 3.1:
comidas.forEach((elem,index,array) =>{console.log(elem,index,array)});

//$ Ejemplo 3.2:
const foreachfunction = (elem, index, array) =>{console.log(elem,index,array)}
comidas.forEach(foreachfunction);

// //$ Ejemplo 5:
comidas.forEach((elem) =>{console.log(elem + " ¡que rico!!🤤")});
console.log(comidas);

//$ Ejemplo 6:
const numerospares = [2,4,6,8,10];
numerospares.forEach((elem,index) =>{console.log(elem*index)});
console.log(numerospares);

//$ Bonus Example :

const numeros = [1,2,3,4,5];
numeros.forEach((a,e,array) =>{console.log(array.at((array.length-1)-e) + `    ${a}`)});


//, map:
//+ ejecuta una funcion a cada elemento de un array y crea un nuevo array afectado por esto.

let numerosimpares = [1,3,5,7];

//$ Ejemplo 1:
numerosimpares.map((a)=>{console.log(a)});

//$ Ejemplo 2:
numerosimpares.map((a,b)=>{console.log(a,b)});

// $ Ejemplo 3:
numerosimpares.map((a,b,c)=>{console.log(a,b,c)});

// $ Ejemplo 4:
numerosimpares.map(function(a,b,c) {console.log(a,b,c)});


// $ Ejemplo 5:
multiplicar_impares =  numerosimpares.map(i => i*2); 
console.log(numerosimpares);    
console.log(multiplicar_impares);    

// $ Ejemplo 6:
concatenarElementos =  numerosimpares.map(i => "♥"+i+"♥"); 
console.log(numerosimpares);    
console.log(concatenarElementos);    






//, reduce:
const numeros = [2, 4, 6, 8];
//$ Ejemplo 1.1:
const sumaConValorInicial = numeros.reduce(function (acumulador, elemento) {return acumulador + elemento}, 0);
console.log(sumaConValorInicial);

//$ Ejemplo 2.1:
const restaConValorInicial = numeros.reduce(function (acumulador, elemento) {return acumulador - elemento}, 0);
console.log(restaConValorInicial);

//$ Ejemplo 1.2:
const sumaSinValorInicial = numeros.reduce(function (acumulador, elemento) {return acumulador + elemento});
console.log(sumaSinValorInicial);
//$ Ejemplo 2.2:
const restaSinValorInicial = numeros.reduce(function (acumulador, elemento) {return acumulador - elemento});
console.log(restaSinValorInicial);

//$ Ejemplo 3.1:
const suma1 = [2,2,2].reduce(function (resultado, elemento) {return resultado + elemento});
console.log(suma1);

//$ Ejemplo 3.2:
const suma2 = [2,2,2].reduce(function (resultado, elemento) {return resultado + elemento}, 2);
console.log(suma2);

//$ Ejemplo 4.1:
const resta1 = [2,2,2].reduce(function (resultado, elemento) {return resultado - elemento;});
console.log(resta1);
//$ Ejemplo 4.2:
const resta2 = [2,2,2].reduce(function (resultado, elemento) {return resultado - elemento;},0);
console.log(resta2);
//$ Ejemplo 4.3:
const resta3 = [2,2,2].reduce(function (resultado, elemento) {return resultado - elemento;}, 2);
console.log(resta3);




//, filter:
//+ Crea un nuevo array con todos los elementos que cumplan una condición.

//$ Ejemplo 1:
numeros = [20,34,12,4,17,22,10,3];
mayores_a_15 = numeros.filter(num => num>15);
console.log(mayores_a_15)

//$ Ejemplo 2:
palabras = ["holis","ventana","muzarella","informatica","libros","cafe","chicle"];
palabras_largas = palabras.filter(elemento => (elemento.length)>7);
console.log(palabras_largas)

//, reverse:
//+ Invierte el contenido de un array

//$ Ejemplo 1:
const numeros = [1,2,3,4,5];
const resultado = numeros.reverse();
console.log(resultado);

//$ Ejemplo 2:
const letras = ["a","b","c","d"];
const resultado = letras.reverse();
console.log(resultado);



//, sort:
//+ Ordena un array segun su valor unicode.

const numeros = [9,3,5,1,2,20];
const letras = ["A","S","B","W","R","C","a","z"];
const palabras = ["BUENAS","abecedario","POCHOCLOS","Lagarto"];

// console.log(numeros); 
// console.log(letras); 
// console.log(palabras); 

console.log(numeros.sort()); 
console.log(letras.sort()); 
console.log(palabras.sort()); 




//, join:
//+ Devuelve el contenido de un array como string.

//$ Ejemplo 1:
const palabras = ["pochoclos","con","mantequilla"];
console.log(palabras);
console.log(palabras[0]);
console.log(palabras.length);

palabrasComoCadena = palabras.join();
console.log(palabrasComoCadena);
console.log(palabrasComoCadena[0]);
console.log(palabrasComoCadena.length);

//$ Ejemplo 2:
const frase = ["Las","tiranias","fomentan","la","estupidez"];
console.log(frase.join("")); 
console.log(frase.join("♪")); 
console.log(frase.join(" ♥♫♥ ")); 




//, slice:
//+ Devuelve la copia de parte de un array.

let saludos = ["La", "pintura", "es", "poesía", "muda", "la", "poesía", "pintura", "ciega"];

console.log(saludos.slice(0,4));
console.log(saludos.slice(4,7));
console.log(saludos.slice(7,9));
console.log(saludos.slice(-1,0));
console.log(saludos.slice(0,0));
console.log(saludos.slice(0,-1));
console.log(saludos.slice(2));
console.log(saludos.slice(4));



//, flat:
//+ Deja todos los elementos de array anidados en un mismo array.

//$ Ejemplo 1:
const array = [1, 2, , 4, 5];
console.log(array.flat())

//$ Ejemplo 2:
const arrayLevel_1 = [1, 2, [3, 4]];
console.log(arrayLevel_1.flat()); 
const arrayLevel_2 = [1, 2, [3, 4, [5, 6]]];
console.log(arrayLevel_2.flat()); 

//$ Ejemplo 3:
const arrayLevel_3 = [1, 2, [3, 4, [5, 6]]];
console.log(arrayLevel_3.flat(2)); 

const arrayLevel_4 = [1, 2, [3, 4, [5,[6,7,8]]]];
console.log(arrayLevel_4.flat(88)); 






//, find:
//+ Devuelve el primer elemento que cumpla con una condición

// //$ Ejemplo 1:
    const numeros = [5, 12, 8, 130, 44];

const busqueda1 = numeros.find(element => element > 12);
console.log(busqueda1);

const busqueda2 = numeros.find(element => element = 12);
console.log(busqueda2);

const busqueda3 = numeros.find(element => element === 12);
console.log(busqueda3);

const busqueda4 = numeros.find(element => element === 13);
console.log(busqueda4);

//$ Ejemplo 2:
    nombres = ["oto","marta","beatriz","jose"];

const busqueda_1 = nombres.find(element => element = "oto");
console.log(busqueda_1);

const busqueda_2 = nombres.find(element => element != "oto");
console.log(busqueda_2);

const busqueda_3 = nombres.find(element => element.length > 5);
console.log(busqueda_3);

const busqueda_4 = nombres.find(element => element.startsWith("j"));
console.log(busqueda_4);

const busqueda_5 = nombres.find(element => element.length == 1);
console.log(busqueda_5);






//, some:
//+ Comprueba si al menos un solo elemento cumple con una condición y devuelve true o false

//$ Ejemplo 1:
    const numeros = [1, 2, 3, 4, 5];
    
const divisor_1 = (numeros) => numeros % 2 === 0;
console.log(numeros.some(divisor_1));

const divisor_2 = (numeros) => numeros % 3 === 0;
console.log(numeros.some(divisor_2));

const divisor_3 = (numeros) => numeros % 7 === 0;
console.log(numeros.some(divisor_3));

const divisor_4 = (numeros) => numeros % 8 === 0;
console.log(numeros.some(divisor_4));

//$ Ejemplo 2:
    const nombres = ["tahiel","baco","areu"];

const empizaCon_A =  nombres.some(nombres => nombres.startsWith("a")); 
console.log(empizaCon_A);

const empizaCon_C =  nombres.some(nombres => nombres.startsWith("c")); 
console.log(empizaCon_C);

const terminaCon_O =  nombres.some(nombres => nombres.endsWith("o")); 
console.log(terminaCon_O);

const terminaCon_Z =  nombres.some(nombres => nombres.endsWith("z")); 
console.log(terminaCon_Z);

//$ Ejemplo 3:

console.log([2, 5, 8, 1, 4].some(numero => numero > 10));
console.log(["uva","pera","maracuya"].some(palabra => palabra.length > 10));
console.log([2, 5, 8, 1, 4].some(numero => numero < 10));
console.log(["uva","pera","maracuya"].some(palabra => palabra.length < 10));





//, findIndex:
//+ Comprueba si al menos un solo elemento cumple con una condición y devuelve su indice.

//$ Ejemplo 1:
    const numeros = [7,12,25,44];

const mayor_a12 = (element) => element > 25;
console.log(numeros.findIndex(mayor_a12));

const menor_a25 = (element) => element < 25;
console.log(numeros.findIndex(menor_a25));

const igual_a99 = (element) => element == 99;
console.log(numeros.findIndex(igual_a99));




//$ Ejemplo 2:
    const frutas = ["mandarina","papaya","mango","uva","morron"];

const indice1 = frutas.findIndex(fruta => fruta === "papaya");
const indice2 = frutas.findIndex(fruta => fruta === "morron");
const indice3 = frutas.findIndex(fruta => fruta === "berenjena");

console.log(indice1); 
console.log(frutas[indice1]); 
console.log(indice2); 
console.log(frutas[indice2]); 
console.log(indice3); 
console.log(frutas[indice3]); 

*/