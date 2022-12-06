/*
//.METODOS PARA ATRIBUTOS:
// + Con ellos podemos definir,modificar, obtener y eliminar atributos de elementos en el DOM

//, setAttribute:
// + Permite modificar o crear un atributo nuevo para un elemento.

INPUT1 = document.querySelector(".INPUT1");
INPUT2 = document.querySelector(".INPUT2");

INPUT2.setAttribute("type","text");
INPUT2.setAttribute("type","color");
INPUT2.setAttribute("type","file");
INPUT2.setAttribute("type","password");
INPUT2.setAttribute("type","checkbox");

//$ Creando un atributo para el input:
INPUT2.setAttribute("type","submit");

//, getAttribute: 
//+ Nos permite obtener el valor de un atributo.

PARRAFO1 = document.querySelector(".PARRAFO1");
PARRAFO2 = document.querySelector(".PARRAFO2");
valor1 = PARRAFO1.getAttribute("id");
valor2 = PARRAFO2.getAttribute("id");
console.log(valor1 + "  " + valor2);
valor1 = PARRAFO1.getAttribute("class");
valor2 = PARRAFO2.getAttribute("class");
console.log(valor1 + "  " + valor2);

//, removeAttribute: 
//+ Nos permite remover el valor de un atributo
enlace = document.getElementById("enlace");
parrafo = document.getElementById("parrafo");
enlace.removeAttribute("style");
parrafo.removeAttribute("style");

//, hasAttribute: 
//+ Nos permite corroborar si un elemento tiene o no un atributo.

titulo = document.getElementById("tit");

consultaClase = titulo.hasAttribute("class");
consultaID = titulo.hasAttribute("id");
consultaEstilo = titulo.hasAttribute("style");

console.log(consultaClase),
console.log(consultaID);
console.log(consultaEstilo);

*/
/*

//.METODOS PARA CLASES:
//, Add:
//+ Agrega una clase a un elemento
titulo = document.getElementById("titulo");
titulo.classList.add("clase1","clase2","clase3","clase4");

//,Remove:
//+ Remueve una clase a un elemento
titulo.classList.remove("clase4");

//, Item:
//+ devuelve las clases segun su indice de izquierda a derecha
item_consulta1 = titulo.classList.item("0");
item_consulta2 = titulo.classList.item("1");
item_consulta3 = titulo.classList.item("2");
item_consulta4 = titulo.classList.item("3");
document.write(item_consulta1 + "<br>");
document.write(item_consulta2 + "<br>");
document.write(item_consulta3 + "<br>");
document.write(item_consulta4 + "<br>");

//,Contains:
//+ Verifica si un elemento contiene una clase o no.

respuesta1 = titulo.classList.contains("clase1");
respuesta2 = titulo.classList.contains("jejo");
document.write(respuesta1 + "<br>");
document.write(respuesta2 + "<br>");

//, Replace:
//+ Reemplaza una clase por otra.
titulo.classList.replace("clase1","clase_nueva");


//, toogle:
//+ Intercambia entre quitar y agregar una clase en caso de que exista o no.
titulo.classList.toggle("clase_nueva2");
titulo.classList.toggle("clase_nueva");
titulo.classList.toggle("clase_nueva2",true);
titulo.classList.toggle("clase_nueva");
titulo.classList.toggle("clase_nueva",false);  

*/

/*
//. ATRIBUTOS GLOBALES: 

  //, Atributos de data :
    //+  Permite detaller y obtener valores particulares en etiquetas

    const parrafo = document.getElementById("parrafo");
    console.log(parrafo.dataset);
    console.log(parrafo.dataset.numero);
    console.log(parrafo.dataset.tipo);
    console.log(parrafo.dataset.autor);


    //, contentEditable: 
      //+ Permite editar el contenido de una etiqueta html

    titulo = document.querySelector(".titulo");
    titulo.setAttribute("contentEditable","true");

    

    //, dir: 
      //+ Indica la dirección de un texto adecuándolo a los lenguajes del mundo: (left to right) (right to left)
    parrafo = document.getElementById("parrafo");    
    parrafo.setAttribute("dir","ltr"); //occidentalmente por defecto
    parrafo.setAttribute("dir","rtl"); //orientalmente por defecto


    //, hidden: 
      //+ Hace que un elemento se oculte o no.
    parrafo2 = document.getElementById("parrafo2");
    parrafo2.setAttribute("hidden","");
    parrafo2.setAttribute("hidden","true");
    parrafo2.setAttribute("hidden","false");
    parrafo2.setAttribute("hidden","cualquiercosa");
    parrafo2.setAttribute("hidden"); //no funciona sino le damos al menos un valor.

    //, tabindex: 
      //+ Permite o no hacer un “focus” en un elemento. Priorizando los primeros elementos dentro de una tabla de indices
    parrafo1 = document.querySelector(".parrafo1");
    parrafo2 = document.querySelector(".parrafo2");
    parrafo3 = document.querySelector(".parrafo3");
    parrafo4 = document.querySelector(".parrafo4");

    //$ Ejemplo 1:
    parrafo1.setAttribute("tabindex","1");
    parrafo2.setAttribute("tabindex","2");
    parrafo3.setAttribute("tabindex","3");
    parrafo4.setAttribute("tabindex","4");

    //$ Ejemplo 2:
    parrafo1.setAttribute("tabindex","4");
    parrafo2.setAttribute("tabindex","2");
    parrafo3.setAttribute("tabindex","1");
    parrafo4.setAttribute("tabindex","3");
    

    //, Title: 
    //+ Permite dar el titulo de un elemento cuando hacemos hoover en el.
    titulo = document.getElementById('titulo');
    titulo.setAttribute("title","saludo");
    titulo.setAttribute("title","titulo");

    //, Style: 
    //+ permite modificar el estilo del html con css desde JavaScript cambiando ligeramente la sintaxis
    titulo = document.querySelector(".titulo");
    titulo.style.color = "red";
    titulo.style.color = "#4f2";
    titulo.style.backgroundColor = "red";
    titulo.style.backgroundColor = "#000";
    titulo.style.padding = "15px";
    titulo.style.borderRadius = "20px"


    //, className: 
    //+ permite obtener o agregar una clase en un elemento.
    contenedor = document.getElementById("contenedor");
    parrafo = document.getElementById("parrafo");
    nombreClase_1 = "superClase"
    nombreClase_2 = "super clase"

    // antes:
    console.log(contenedor.className)
    console.log(parrafo.className)

    // despues:
    contenedor.className = 2;
    parrafo.className = "clase"
    console.log(contenedor.className)
    console.log(parrafo.className)

    // despues 2:
    contenedor.className = nombreClase_1;
    parrafo.className = nombreClase_2;
    console.log(contenedor.className)
    console.log(parrafo.className)

    // usar clases para modificar elementos:
    parra = document.querySelector(".super");
    parra.innerHTML = "holi"
    parra = document.querySelector(".clase");
    parra.innerHTML = "chau"
*/


/*

//. ATRIBUTOS DE INPUTS:

//, value 
//+ Establece o devuelve el valor del atributo value. 

    input = document.getElementById("inputId");
    console.log(input.value);

//, type:
// + Modifica el tipo de dato que recibe un input.
input = document.getElementById("inputId");
input.type = "color"
input.type = "password"
input.type = "button"
input.type = "checkbox"
input.type = "date"
input.type = "datetime-local"
input.type = "email"
input.type = "file"
input.type = "hidden"
input.type = "image"
input.type = "month"
input.type = "number"
input.type = "radio"
input.type = "range"
input.type = "reset"
input.type = "search"
input.type = "submit"
input.type = "tel";
input.type = "text"
input.type = "time"
input.type = "url"
input.type = "week

//, Accept:
//+ Permite validar los archivos que puede aceptar un input.

input = document.querySelector(".clase_de_input");

//$ACEPTAR TODOS LOS TIPOS DE: IMAGEN-AUDIO-VIDEO:

input.accept = "image/*"
input.accept = "audio/*"
input.accept = "video/*"

//$ ACEPTAR TIPOS ESPECIFICOS DE IMAGEN-AUDIO-VIDEO: (SIEMPRE Y CUANDO EL NAVEGADOR LOS RECONOZCA)
input.accept = "image/png"
input.accept = "image/bmp"
input.accept = "image/jpg" // pareciese que NO LO RECONOCE firefox
input.accept = "audio/wav"
input.accept = "audio/mp3"
input.accept = "audio/flac"
input.accept = "video/mp4"
input.accept = "video/avi"
input.accept = "video/mov" // pareciese que NO LO RECONOCE firefox

//$ ACEPTAR FORMATOS ESPECIFICOS:

input.accept = ".jpg";
input.accept = ".mov";
input.accept = ".loquequieras";


//,minlenght: 
//+ Caracteres minimos que requiere un input.

input = document.querySelector(".clase_de_input");
input.minLength= 6;


//, placeholder: 
//+ muestra un mensaje efimero en el campo de un input

input = document.querySelector(".clase_de_input");
input.placeholder= "INGRESE SU NOMBRE";

//, required: 
//+ hace que un campo sea requerido

mail = document.querySelector(".clase_de_input1");
contraseña = document.querySelector(".clase_de_input2");
mail.required = " ";
contraseña.required = " ";


*/
