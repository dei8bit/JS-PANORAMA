/*
//. FORMA NO RECOMENDADA:
function clickeaste(){console.log("clickearon el boton")}
/*


//_ Eventos en general:

//, DOMDontentLoaded: 
//+ Se dispara si se carga el DOM
document.addEventListener("DOMContentLoaded", ()=>{console.log("Cargaste el DOM!!")})
 */
/*

//_ Eventos con el mouse:


//, click:
// + Escucha cuando hacen click en algun elemento HTML seleccionado
btn = document.getElementById("boton");
btn.addEventListener("click", ()=>{console.log("Me clickeaste!!")})

//, focus:
//+ Escucha cuando un elemento está en foco
// btn = document.getElementById("boton");
// btn.addEventListener("mousemove", ()=>{console.log("Me focuseaste!!")})

//, blur:
//+ Escucha cuando un elemento esta fuera de foco. 
campo = document.getElementById("campo");
campo.addEventListener("blur", ()=>{console.log("Me desfocuseaste!!")})

//, change:
//+ Escucha dos cosas: cuando un elemento es cambiado y pierde su foco.
// const campo = document.getElementById("campo");
// campo.addEventListener("change",()=>{console.log("Hiciste un cambio! y te fuiste!")})


//, mouseover :
//+ Escucha cuando el mouse entra en el contenedor de un elemento. 
btn = document.getElementById("boton");
btn.addEventListener("mouseover", ()=>{console.log("Entraste!!")})
//, mouseout:
//+ Escucha cuando el mouse sale del contenedor de un elemento 
btn = document.getElementById("boton");
btn.addEventListener("mouseout", ()=>{console.log("Te fuiste!!")})
//, mousemove:
//+ Escucha mientras el mouse se mueve por un elemento. 
btn = document.getElementById("boton");
btn.addEventListener("mousemove", ()=>{console.log("Pasaste por aqui!!")})
//, mousedown:
//+ Escucha cuando el mouse selecciona un elemento. 
btn = document.getElementById("boton");
btn.addEventListener("mousedown", ()=>{console.log("Me apretaste!!")})
//, mouseup :
//+ Escucha cuando el mouse deselecciona un elemento
btn = document.getElementById("boton");
btn.addEventListener("mouseup", ()=>{console.log("Me soltaste!!")})

//, reset :
//+ Escucha si un elemento resetea algún formulario.
form = document.getElementById("formulario");
form.addEventListener("reset", ()=>{console.log("Has reseteado!!")})

//, select :
//+ Escucha si se ha seleccionado un texto en un campo input.
campo = document.getElementById("campo");
campo.addEventListener("select", ()=>{console.log("Has seleccionado!!")})

//, submit:
//+ Escucha la acción de submit.
const form = document.getElementById("formulario");
form.addEventListener("submit",()=>{console.log("has enviado el formulario")})
 */


/*
//_ Eventos teclas:

//, keydown:
//+ Escucha cuando se pulsa cualquier tecla y mientras sigue pulsada.
campo = document.getElementById("campo");
campo.addEventListener("keydown", ()=>{console.log("Pulsaste una tecla")})

//, keyup:
//+ Escucha cuando una se mantiene pulsada
campo = document.getElementById("campo");
campo.addEventListener("keyup", ()=>{console.log("Soltaste la tecla")})

//, keypress:
//+ Escucha cuando se suelta una tecla presionada previamente.
campo = document.getElementById("campo");
campo.addEventListener("keypress", ()=>{console.log("Mantuviste una tecla")})

*/





/*

//_ BUBBLING:

padre = document.getElementById("padre");
hijo = document.getElementById("hijo");
nieto = document.getElementById("nieto");

//, Observando la propagacion:

padre.addEventListener("click" ,()=>{console.log("CLICKEASTE PADRE");});
hijo.addEventListener("click" ,()=>{console.log("CLICKEASTE HIJO");});
nieto.addEventListener("click" ,()=>{console.log("CLICKEASTE NIETO");});

//, stopPropagation:
// + Impride que los eventos se propagen a sus contenedores padre

padre.addEventListener("click" ,(e)=>{
    e.stopPropagation()
    console.log("CLICKEASTE PADRE");
});
hijo.addEventListener("click" ,(e)=>{
    e.stopPropagation()
    console.log("CLICKEASTE HIJO");
});
nieto.addEventListener("click" ,(e)=>{
    e.stopPropagation()
    console.log("CLICKEASTE NIETO");
});

*/

/*
//, preventDefault:
//+ Previene el comportamiento por defecto de un evento.
const form = document.getElementById("formulario");
const enviar = (evn) => {
    evn.preventDefault();
    console.log(evn.target.name.value, evn.target.email.value, evn.target.pass.value)}
    form.addEventListener("submit",enviar);
*/


document.addEventListener("click", (e) => {console.log(e.target)});


/*
//_ DELEGACION DE EVENTOS:

const container = document.querySelector(".container");

//, target:
//+  Permite devolver el objeto en el que se disparó el evento. 
//$ Ejemplo 1:
container.addEventListener("click", (e) => {console.log(e.target)});
container.addEventListener("click", (e) => {console.log(e.target.id)});

//$ Ejemplo 2:
/// Usando target con ID
container.addEventListener("click", (e) => { 
    if (e.target.id === "padre"){console.log("diste click en el padre")}
    if (e.target.id === "hijo"){console.log("diste click en el hijo")}
    if (e.target.id === "nieto"){console.log("diste click en el nieto")}
});

// ,Usando target con dataset

//$ sintaxis 1:
//- incluye corchetes
container.addEventListener("click", (e) => { 
    if (e.target.dataset["info"] === "father"){console.log("clickeaste dentro del padre")}
    if (e.target.dataset["info"] === "son"){console.log("clickeaste dentro del hijo")}
    if (e.target.dataset["info"] === "grandson"){console.log("clickeaste dentro del nieto")}
});
//$ sintaxis 2:
//- no incluye corchetes
container.addEventListener("click", (e) => { 
    if (e.target.dataset.info === "father"){console.log("clickeaste dentro del padre")}
    if (e.target.dataset.info === "son"){console.log("clickeaste dentro del hijo")}
    if (e.target.dataset.info === "grandson"){console.log("clickeaste dentro del nieto")}
});


//, matches:

container.addEventListener("click", (e) => {

console.log(e.target.matches("#cualquiera"));
console.log(e.target.matches(".cualquiera"));
console.log(e.target.matches("#padre"));
console.log(e.target.matches(".border-primary"));
console.log(e.target.matches("#hijo"));
console.log(e.target.matches(".border-secondary"));
console.log(e.target.matches("#nieto"));
console.log(e.target.matches(".border-danger"));

if (e.target.matches("#padre")){console.log("diste click en el padre")}
if (e.target.matches("#hijo")){console.log("diste click en el hijo")}
if (e.target.matches("#nieto")){console.log("diste click en el nieto")}

if (e.target.matches(".border-primary")){console.log("diste click en el padre")}
if (e.target.matches(".border-secondary")){console.log("diste click en el hijo")}
if (e.target.matches(".border-danger")){console.log("diste click en el nieto")}    
    
});

*/

