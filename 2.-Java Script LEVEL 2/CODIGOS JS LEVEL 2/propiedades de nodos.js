
//.closest:
//+  devuelve el elemento mas cercano que tenga el selector que le pasemos como parametro.
//$ Ejemplo 1:
// negrita = document.querySelector(".b")
// console.log(negrita.closest(".b"));
// console.log(negrita.closest(".clase"));
// console.log(negrita.closest("claseInexistente"));

//$ Ejemplo 2 y 3:
// negrita = document.querySelector(".b")
// console.log(negrita.closest(".clase"));



// //. cloneNode:
//+ Permite clonar un elemento y/o sus hijos.

const contenedor = document.getElementById("contenedor");

//$ Ejemplo 1:
const clon = contenedor.cloneNode();
document.write(clon);
console.log(clon);

//$ Ejemplo 2:
const clonTrue = contenedor.cloneNode(true);
document.write(clonTrue);
console.log(clonTrue);