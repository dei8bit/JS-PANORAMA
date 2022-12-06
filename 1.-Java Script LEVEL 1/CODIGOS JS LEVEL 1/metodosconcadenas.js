//# METODOS CON CADENAS:

/*
//.concat:
//+Permite concatenar dos cadenas

let cadena1 = "cadenas de titanio";
let cadena2 = " y trueno";

concatenamiento1 = cadena1.concat(" y lava");
concatenamiento2 = cadena1.concat(cadena2);
console.log(concatenamiento1);
console.log(concatenamiento2); 


//.startsWith:
//+ Devuelve true si una cadena empieza con los caracteres indicados y false de lo contrario. 

let cadena = "Oraculo estrepitoso"
empiezaCon1 = cadena.startsWith("Or");
console.log(empiezaCon1);
empiezaCon2 = cadena.startsWith("oR");
console.log(empiezaCon2);
empiezaCon3 = cadena.startsWith("OR");
console.log(empiezaCon3);
empiezaCon4 = cadena.startsWith("or");
console.log(empiezaCon4);


//.endsWith:
// //+ Devuelve true si una cadena termina con los caracteres indicados y false de lo contrario.
let cadena = "azul profundo"
terminaCon1 = cadena.endsWith("undo");
console.log(terminaCon1);
terminaCon2 = cadena.endsWith("Undo");
console.log(terminaCon2);
terminaCon3 = cadena.endsWith(" undo");
console.log(terminaCon3);
terminaCon4 = cadena.endsWith("undo ");
console.log(terminaCon4);

//.includes:
//+ Devuelve true si encuentra una cadena incluida en otra.
let cadena = "Errare humanum est";

incluye1 = cadena.includes("r");
console.log(incluye1);
incluye2 = cadena.includes("are");
console.log(incluye2);  
incluye3 = cadena.includes("e hu");
console.log(incluye3);  
incluye4 = cadena.includes("hum est");
console.log(incluye4);  
incluye5 = cadena.includes("nume");
console.log(incluye5);  
incluye6 = cadena.includes("mest");
console.log(incluye6); 



//. indexOf :
//+ Devuelve la primera posicion donde se encuentra un caracter, o "-1" sino se encontro.

let cadena = "Ninguna causa humana merece tal ansiedad";

indice1 = cadena.indexOf("i");
console.log(indice1);
indice2 = cadena.indexOf(" ");
console.log(indice2); 
indice3 = cadena.indexOf("  ");
console.log(indice3);  
indice4 = cadena.indexOf("c");
console.log(indice4);  
indice5 = cadena.indexOf("hu");
console.log(indice5);  
indice6 = cadena.indexOf("t");
console.log(indice6);  
indice7 = cadena.indexOf("e ");
console.log(indice7); 
indice8 = cadena.indexOf("d");
console.log(indice8); 


//. lastIndexOf:
//+ Devuelve la ultima posicion donde se encuentra un caracter, o "-1" sino se encontro.

let cadena = "Ninguna causa humana merece tal ansiedad";
indice1 = cadena.lastIndexOf("i");
console.log(indice1);
indice2 = cadena.lastIndexOf(" ");
console.log(indice2); 
indice3 = cadena.lastIndexOf("  ");
console.log(indice3);  
indice4 = cadena.lastIndexOf("c");
console.log(indice4);  
indice5 = cadena.lastIndexOf("hu");
console.log(indice5);  
indice6 = cadena.lastIndexOf("t");
console.log(indice6);  
indice7 = cadena.lastIndexOf("e ");
console.log(indice7); 
indice8 = cadena.lastIndexOf("d");
console.log(indice8); 

//. padStart:
// + Agrega el/los caracteres indicados al principio de una cadena, hasta cumplir con una longitud.

let cadena = "protoplasmatico";

rellenoAnterior1 = cadena.padStart(-1,"estado");
console.log(rellenoAnterior1);
rellenoAnterior2 = cadena.padStart(0,"relleno");
console.log(rellenoAnterior2);
rellenoAnterior3 = cadena.padStart(12,"cad");
console.log(rellenoAnterior3);
rellenoAnterior4 = cadena.padStart(25,"$_$");
console.log(rellenoAnterior4);
rellenoAnterior5 = cadena.padStart(30,"♥");
console.log(rellenoAnterior5);



//. padEnd
// + Agrega el/los caracteres indicados al final de una cadena, hasta cumplir con una longitud.

let cadena = "molecular";
rellenoPosterior1 = cadena.padEnd(-1,"nunca aparecere -.- ");
console.log(rellenoPosterior1);
rellenoPosterior2 = cadena.padEnd(0,"relleno irrelevante");
console.log(rellenoPosterior2);
rellenoPosterior3 = cadena.padEnd(5,"asd");
console.log(rellenoPosterior3);
rellenoPosterior4 = cadena.padEnd(18,"mente poderoso");
console.log(rellenoPosterior4);
rellenoPosterior5 = cadena.padEnd(24," JAH!");
console.log(rellenoPosterior5);



//.repeat:
//+ Repite una cadena cuantas veces se indique.

let cadena = "JUAZ!";
repeticion1 = cadena.repeat(0); 
console.log(repeticion1);
repeticion2 = cadena.repeat(1,);
console.log(repeticion2);
repeticio3 = cadena.repeat(2);
console.log(repeticio3);
repeticio4 = cadena.repeat(4);
console.log(repeticio4);





//.split:
//+ Divide una cadena a partir de una subcadena encontrada, crea un nuevo array con estas divisiones.

let cadena = "que onda";

separacion = cadena.split("");
console.log(separacion);
console.log(separacion[0]);
console.log(separacion[1]);
console.log(separacion[2]);
console.log(separacion[3]);
console.log(separacion[4]);
console.log(separacion[5]);

separacion = cadena.split("",2);
console.log(separacion);
separacion = cadena.split("",3);
console.log(separacion);
separacion = cadena.split("",4);
console.log(separacion);


separacion = cadena.split(" "); 
console.log(separacion  );  
console.log(separacion[0]);
console.log(separacion[1]);
console.log(separacion[2]);
console.log(separacion[3]);
console.log(separacion[4]);
console.log(separacion[5]);



separacion1 = cadena.split("qu"); 
console.log(separacion1);
separacion2 = cadena.split("que");
console.log(separacion2);
separacion3 = cadena.split("on");
console.log(separacion3);
separacion4 = cadena.split("onda");
console.log(separacion4);







//. substring:
//+ Devuelve una subcadena a partir de una posicion inicial y una final.
let cadena = "DIMENSIONAL";
subCadena1 = cadena.substring(0,2) ;
console.log(subCadena1);
subCadena2 = cadena.substring(2,0) ;
console.log(subCadena2);
subCadena3 = cadena.substring(2,2) ; 
console.log(subCadena3);
subCadena4 = cadena.substring(2,4) ;
console.log(subCadena4);
subCadena5 = cadena.substring(4,2) ;
console.log(subCadena5);
subCadena6 = cadena.substring(0,8) ;
console.log(subCadena6);
subCadena7 = cadena.substring(8,4) ;
console.log(subCadena7);
subCadena8 = cadena.substring(10,1) ;
console.log(subCadena8);
subCadena9 = cadena.substring(-1) ;
console.log(subCadena9);
subCadena10 = cadena.substring(3) ;
console.log(subCadena10);




//. toLowerCase:
//+ Convirte una cadena a minusculas
let cadena = "DIME CON QUIEN ANDAS Y TE DIRE QUIEN ERES"
aMinusculas = cadena.toLowerCase();
console.log(aMinusculas);
console.log("MAYUSCULACION".toLowerCase());

//. toUpperCase:
//+ Convirte una cadena a mayusculas
let cadena = "dime con quien andas y te dire quien eres"
aMayusculas = cadena.toUpperCase();
console.log(aMayusculas);
console.log("minusculacion".toUpperCase());


//. toString:
//+ Convierte caracteres a strings.
let numero = 20;
console.log(2 + numero);

let numeroString = numero.toString();
console.log(2  + numeroString);





//. trim:
//+ Elimina los espacios en blancos de un string.

let cadena1 = "     buenas    ";
console.log(`${cadena1} contiene ${cadena1.length} caracteres` );
sinEspacios = cadena1.trim();
console.log(`${sinEspacios} contiene ${sinEspacios.length} caracteres` );



let cadena2 = "  que tal  ";
console.log(`${cadena2} contiene ${cadena2.length} caracteres` );
sinEspacios = cadena2.trim();
console.log(`${sinEspacios} contiene ${sinEspacios.length} caracteres` );




//.trimStart
//+ Elimina los espacios en blanco al principio de un string.
let cadena = "           como va todo   ";
console.log(`${cadena} contiene ${cadena.length} caracteres` );

sinEspacioPrincipales = cadena.trimStart();
console.log(`${sinEspacioPrincipales} contiene ${sinEspacioPrincipales.length} caracteres` );


//. trimEnd:
//+ Elimina los espacios en blanco al final de un string.
let cadena = "   Que puedo decir...     ";
console.log(`${cadena} contiene ${cadena.length} caracteres` );

sinEspaciosFinales = cadena.trimEnd();
console.log(`${sinEspaciosFinales} contiene ${sinEspaciosFinales.length} caracteres` );


 */