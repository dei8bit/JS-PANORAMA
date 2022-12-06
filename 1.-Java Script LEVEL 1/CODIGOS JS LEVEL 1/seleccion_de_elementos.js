
/*

//.METODOS DE SELECCION DE ELEMENTOS:
//, getElementById: 
//+ seleccióna los elementos por su ID.


body = document.getElementById("elemBody");
heading = document.getElementById("elemHeading");
parrafo = document.getElementById("elemP");
div = document.getElementById("elemDiv");
header = document.getElementById("elemHeader");
ul = document.getElementById("elemUL");
li = document.getElementById("elemLI");
u = document.getElementById("elemU");

document.write(body + "<br>");
document.write(heading + "<br>");
document.write(parrafo + "<br>");
document.write(div + "<br>");
document.write(header + "<br>");
document.write(ul + "<br>");
document.write(li + "<br>");
document.write(u + "<br>");

console.log(body);
console.log(heading);
console.log(parrafo);
console.log(div);
console.log(header);
console.log(ul);
console.log(li);
console.log(u);




//, getElementsByTagName:
//+ Selecciona los elementos por su etiqueta HTML.
//$ Ejemplo 1:
parrafo = document.getElementsByTagName("p");
document.write(parrafo + "<br>");
console.log(parrafo);

//$ Ejemplo 2:
parrafos = document.getElementsByTagName("p");

document.write(parrafos[0] + "<br>");
document.write(parrafos[1] + "<br>");
document.write(parrafos[2] + "<br>");
document.write(parrafos[3] + "<br>");
document.write(parrafos[4] + "<br>");

console.log(parrafos[0]);
console.log(parrafos[1]);
console.log(parrafos[2]);
console.log(parrafos[3]);
console.log(parrafos[4]);


//, querySelector: 
// +selección todos los elementos HTML que pertenezcan al nombre y categoría. 

parrafoClass = document.querySelector(".claseParrafo");
parrafoID = document.querySelector("#idParrafo");
document.write(parrafoClass + "<br>");
document.write(parrafoID + "<br>");

console.log(parrafoClass);
console.log(parrafoID);




//, querySelectorAll:
// + selección todos los elementos que pertenezcan al nombre y categoría. 
//$ Ejemplo 1:

parrafos = document.querySelectorAll(".claseParrafo");
divs = document.querySelectorAll("#IDiv");
document.write(parrafos + "<br>");
document.write(divs + "<br>");

console.log(parrafos);
console.log(divs);

//$ Ejemplo 2:
parrafos = document.querySelectorAll(".claseParrafo");
divs = document.querySelectorAll("#IDiv");
document.write(parrafos[0] + "<br>");
document.write(parrafos[1] + "<br>");
document.write(parrafos[2] + "<br>");
document.write(divs[0] + "<br>");
document.write(divs[1] + "<br>");
document.write(divs[2] + "<br>");

console.log(parrafos[0]);
console.log(parrafos[1]);
console.log(parrafos[2]);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

*/