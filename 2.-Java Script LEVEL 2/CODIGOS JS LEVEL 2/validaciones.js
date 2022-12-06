/*

//. Validacion con expresiones regulares:

const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

formulario.addEventListener("submit", (e)=>{    
    e.preventDefault();
    if (!regUserName.test(input.value)) {
        console.log('Formulario no valido');
        return;}
        console.log("formulario enviado");
});

//. FormData:

const formulario = document.getElementById("formulario");
const campos = new FormData(formulario);

formulario.addEventListener("submit", (e)=>{    
    e.preventDefault();
    for(let item of campos){
    console.log(item);
}
console.log(campos.get("nombre"));
console.log(campos.get("email"));
});

 */
