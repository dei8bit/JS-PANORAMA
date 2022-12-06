//# EXPORT:
//+Permite exportar modulos JS

//. Exportacion por elemento:
// export const numero = 77;
// export const texto = "Buenas!";
// export const arregloFrutas = ["manzana","morron","zapallo"];
// export const objetoPersona = {nombre:"value1",nombre2:"value2"};
// export const funcion = () => "Que tal!";
// export class humano { };




//. Exportacion por variable:

// const numero = 99;
// const palabra1 = "improperio";
// const palabra2 = "eufemismo";
// const bienvenir = () => "Bievenido al mundo virtual";
// const despedir = () => "Adi0s 1os 0 y 1 lo esperan pronto";
// class humano { };

// export { numero };
// export { palabra1 , palabra2 };
// export { bienvenir };
// export { despedir };
// export { humano };

//. Exportacion renombrada:

// const numero = 99;
// const palabra1 = "improperio";
// const palabra2 = "eufemismo";
// const bienvenir = () => "Bievenido al mundo virtual";
// const despedir = () => "Adi0s 1os 0 y 1 lo esperan pronto";
// class humano { };

// export { numero as numeroPerfecto };
// export { palabra1 as insulto , palabra2 as alusion };
// export { bienvenir as saludo1 };
// export { despedir as saludo2 };
// export { bienvenir, despedir as chau };
// export { bienvenir as hola ,despedir  };
// export { humano as homosapie };

//. Exportacion multiple:

// const numero = 99;
// const palabra1 = "improperio";
// const palabra2 = "eufemismo";
// const bienvenir = () => "Bievenido al mundo virtual";
// const despedir = () => "Adi0s 1os 0 y 1 lo esperan pronto";
// class humano { };

//$ Ejemplo 1:
// export {numero,palabra1,palabra2};

//$ Ejemplo 2:
// export {
//   numero,
//   palabra1,palabra2,
//   bienvenir as alo,
//   despedir as byebye,
//   humano
// };

//. Exportacion externa:

//$ Exportar todo el contenido de un modulo externo.
// export * from "./modulosExternos.js";

//$ Exportar variables especificas de un modulo externo.
//- Ejemplo 1:
// export { n1,n2 } from "./modulosExternos.js";
//- Ejemplo 2:
// export { n1, n2 as pepe } from "./modulosExternos.js";

//$ Exportar todo el contenido de un modulo externo dentro de un objeto con un nombre .
// export * as nuevoNombre from "./modulosExternos.js";

//. Exportacion por default:

//$ Ejemplo 1:
// export default "cadena de texto exportada por default";

//$ Ejemplo 2:
// export default {
//   nombre: "pedro",
//   edad: 23,
//   ideosincracia: "nihilista",
// };

//$ Ejemplo 3:

// let agamenon = {
//   hito:"heroe",
//   mitologia:"griega",
//   creador:"homero",
// }

// export default agamenon;

//. Codigo para la ejecucion de una importacion total:
// console.log("Buenas, esta es una importacion local");
// const f1 =  ()=>{ console.log( "nosotras somos funciones");}
// const f2 =  ()=>{console.log("que se ejecutaran automaticamente al importar el archivo"); }
// const f3 =  (a,b)=>{console.log(a+b); }

// f1();
// f2();
// f3(2,4);

//. Codigo para la ejecucion de una importacion dinamica:
export const numero = 77;
// console.log("wenas");
// function funcion() {console.log("Soy una funcion importada dinamicamente")};
// const w = ()=>{}
