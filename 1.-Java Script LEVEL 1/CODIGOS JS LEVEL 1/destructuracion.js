/*
// DESESTRUCTURANDO OBJETOS:
let lapices = 20;

const cartuchera = {
    fibrones : ["azul","amarillo","verde"],
    cierre: true,
    alto : "6cm",
    largo : "17cm"
}

const {lapices: utiles = "De colores", fibrones, cierre} = cartuchera //destructuring object

console.log(utiles,cierre,fibrones);
*/

// DESESTRUCTURANDO ARREGLOS:


const te = ["menta","jengibre","rosa mosqueta","verde"];

const [te1,te2,te3,te4,te5="rojo"] = te;

console.log(te4,te3,te5);




