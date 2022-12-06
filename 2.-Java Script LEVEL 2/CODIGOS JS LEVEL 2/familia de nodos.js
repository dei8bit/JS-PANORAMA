/*
//# CHILDS:
//.  Crear Childs:

//_ Appendchild: 
//+ Crea un hijo a un elemento padre

//$ Ejemplo 1:
contenedor = document.getElementById("contenedor");
elemento_nuevo = document.createElement("ul");
elemento_nuevo = document.createElement("li");
contenedor.appendChild(elemento_nuevo);
console.log(contenedor);

//$ Ejemplo 2:
contenedor = document.getElementById("contenedor");
elemento_nuevo = document.createElement("li");
elemento_nuevo.textContent = "Elemento desde js"
contenedor.appendChild(elemento_nuevo);

//$ Ejemplo 3:
const contenedor = document.getElementById("contenedor");
const frutas = ["Pera","Fruta del dragon", "manzana", "banana"];
frutas.forEach(fruta =>{
const elemento = document.createElement("li");
elemento.textContent = fruta;
contenedor.appendChild(elemento)})

//$ Ejemplo 4:

parrafo = document.createElement("p");
parrafo.textContent = "texto de parrafo"
document.body.appendChild(parrafo)
document.head.appendChild(parrafo)
 */


/*
//.  Obtener y modificar Childs:

//_firstChild:
//+ devuelve el primer hijo de un elemento padre.
contenedor = document.getElementById("contenedor");
primer_hijo = contenedor.firstChild;
document.write(primer_hijo);
console.log(primer_hijo);

//_LastChild:
//+ devuelve el primer hijo de un elemento padre.
contenedor = document.getElementById("contenedor");
ultimo_hijo = contenedor.lastChild;
document.write(ultimo_hijo);
console.log(ultimo_hijo);

//_ firstElementChild:
//+ selecciona el primer elemento de un elemento padre.
contenedor = document.getElementById("contenedor");
primer_elemento = contenedor.firstElementChild;
document.write(primer_elemento);
console.log(primer_elemento);


//_ lastElementChild:
//+ devuelve el ultimo elemento de un elemento padre.
contenedor = document.getElementById("contenedor");
ultimo_elemento = contenedor.lastElementChild;
document.write(ultimo_elemento);
console.log(ultimo_elemento);

//_ childNodes:
//+ devuelve una colección de nodos hijos.
contenedor = document.getElementById("contenedor");
nodos_hijos = contenedor.childNodes;
document.write(nodos_hijos);
console.log(nodos_hijos);

//_ children
//+ devuelve la colección de elementos de un padre.  
contenedor = document.getElementById("contenedor");
hijos = contenedor.children;
document.write(hijos);
console.log(hijos);

*/



/*
//.  Metodos con childs:

//_ replaceChild: 
//+  Reemplaza un nodo hijo.

contenedor = document.getElementById("contenedor");
titulo_nuevo = document.createElement("h3");
titulo_nuevo.innerHTML = "TITULO 3 NUEVO";
titulo_viejo = document.getElementById("tit2");
contenedor.replaceChild(titulo_nuevo,titulo_viejo);

//_  removeChild:
//+ remueve un nodo hijo.
contenedor = document.getElementById("contenedor");
parrafo_a_remover = document.getElementById("Parrafo")
contenedor.removeChild(parrafo_a_remover);

//_ hasChildNodes:
//+  consulta por un nodo hijo.
contenedor = document.getElementById("contenedor");
consulta = contenedor.hasChildNodes();
document.write(consulta);
console.log(consulta);

elemento_vacio = document.getElementById("elemento_vacio");
consulta2 = elemento_vacio.hasChildNodes();
document.write(consulta2);
console.log(consulta2);

//$ uso mas practico del metodo: 

contenedor = document.getElementById("contenedor");
consulta = contenedor.hasChildNodes();
if (consulta) {document.write("El elemento tiene hijos");}
else{ document.write("El elemento no tiene hijos");}

document.write("<br>");

elemento_vacio = document.getElementById("elemento_vacio");
consulta2 = elemento_vacio.hasChildNodes();

if (consulta2) {document.write("El elemento tiene hijos");}
else{ document.write("El elemento no tiene hijos");}

*/



/*
//# SIBLINGS:

//. Propiedades de  siblings:

//_ nextSibling: 
//+ devuelve el hermano nodo siguiente

parrafo1 = document.getElementById("p1");
parrafo2 = document.getElementById("p2");
parrafo3 = document.getElementById("p3");
console.log(parrafo1.nextSibling);
console.log(parrafo2.nextSibling);
console.log(parrafo3.nextSibling);


//_ previousSibling:
//+ devuelve el hermano nodo previo

// parrafo1 = document.getElementById("p1");
// parrafo2 = document.getElementById("p2");
// parrafo3 = document.getElementById("p3");
// console.log(parrafo1.previousSibling);
// console.log(parrafo2.previousSibling);
// console.log(parrafo3.previousSibling);

//_ nextElementSibling:
//+ devuelve el elemento hermano siguiente

// parrafo1 = document.getElementById("p1");
// parrafo2 = document.getElementById("p2");
// parrafo3 = document.getElementById("p3");
// console.log(parrafo1.nextElementSibling);
// console.log(parrafo2.nextElementSibling);
// console.log(parrafo3.nextElementSibling);

//_ previousElementSibling:
//+ devuelve el elemento hermano previo

parrafo1 = document.getElementById("p1");
parrafo2 = document.getElementById("p2");
parrafo3 = document.getElementById("p3");
console.log(parrafo1.previousElementSibling);
console.log(parrafo2.previousElementSibling);
console.log(parrafo3.previousElementSibling);
*/



/*

//# PARENTS:

//_parentElement: 
//+ Devuelve el elemento padre de un Nodo.

cuerpo = document.getElementById("BODY");
div = document.getElementById("DIV_PADRE");
parrafo = document.getElementById("PARRAFO_HIJO");

console.log(div.parentElement)
console.log(parrafo.parentElement)
console.log(cuerpo.parentElement)

//_parentNode: 
//+ Devuelve el nodo padre de un nodo.

cuerpo = document.getElementById("BODY");
div = document.getElementById("DIV_PADRE");
parrafo = document.getElementById("PARRAFO_HIJO");

console.log(div.parentNode);
console.log(parrafo.parentNode);
console.log(cuerpo.parentNode); 

*/