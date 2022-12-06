/*
//.createElement:
//+ Crea un elemento html
contenedor = document.getElementById("contenedor");

//$ Ejemplo 1:
elemento_nuevo = document.createElement("li");
document.write(elemento_nuevo);
console.log(elemento_nuevo);

//$ Ejemplo 2:
elemento_nuevo = document.createElement("head");
document.write(elemento_nuevo);
console.log(elemento_nuevo);

//. createTextNode:
//+ Crea un nodo de texto

texto  = document.createTextNode("este es un nodo texto creado"); 
document.write(texto);
console.log(texto);

//. createDocumentFragment: 
//+ Crea un fragmento de documento que se ejecuta donde sea necesario.
const contenedor = document.getElementById("contenedor");
const fragmento = document.createDocumentFragment();

//$ metodo 1:
for (let i = 1; i <= 5; i++) {
    parrafo = document.createElement("p");
    parrafo.innerHTML = `soy el parrafo ${i}`;
    fragmento.appendChild(parrafo);
}
contenedor.appendChild(fragmento);
console.log(fragmento);

//$ metodo 2:

const colores = ["rojo","verde","azul","amarillo"];

colores.forEach((color) =>{
    const li = document.createElement("li");
    li.textContent = color;
    fragmento.appendChild(li);
})

contenedor.appendChild(fragmento)
console.log(contenedor);

*/
