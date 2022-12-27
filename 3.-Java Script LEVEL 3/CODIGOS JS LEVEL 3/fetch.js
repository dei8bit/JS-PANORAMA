/*
//# USANDO FETCH DE FORMA SIMPLE:

const url_1 = "https://rickandmortyapi.com/api";
fetch(url_1)
    .then((respuesta) => respuesta)
    .then((data) => console.log(data));

const url_2 = "https://rickandmortyapi.com/api/character";
fetch(url_2)
    .then((respuesta) => respuesta)
    .then((data) => console.log(data));

const url_3 = "https://rickandmortyapi.com/api/location";
fetch(url_3)
    .then((respuesta) => respuesta)
    .then((data) => console.log(data));

const url_4 = "https://rickandmortyapi.com/api/episode";
fetch(url_4)
    .then((respuesta) => respuesta)
    .then((data) => console.log(data));


//# OBTENER CONTENIDO:

const url_1 = "https://rickandmortyapi.com/api";
fetch(url_1)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_2 = "https://rickandmortyapi.com/api/character";
fetch(url_2)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_3 = "https://rickandmortyapi.com/api/location";
fetch(url_3)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_4 = "https://rickandmortyapi.com/api/episode";
fetch(url_4)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));


//# OBTENER OBJETOS PUNTUALES:

const url_1 = "https://rickandmortyapi.com/api/character/1";
fetch(url_1)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_2 = "https://rickandmortyapi.com/api/character/23";
fetch(url_2)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_3 = "https://rickandmortyapi.com/api/character/415";
fetch(url_3)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));

const url_4 = "https://rickandmortyapi.com/api/character/670";
fetch(url_4)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data));


//# OBTENER ATRIBUTOS DE OBJETOS PUNTUALES:

//$ Ejemplo 1:
const url_1 = "https://rickandmortyapi.com/api/character/1";
fetch(url_1)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data.name));

const url_2 = "https://rickandmortyapi.com/api/character/23";
fetch(url_2)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data.name));

const url_3 = "https://rickandmortyapi.com/api/character/415";
fetch(url_3)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data.name));

const url_4 = "https://rickandmortyapi.com/api/character/670";
fetch(url_4)
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data.name));
*/
//$ Ejemplo 2:

// const url_1 = "https://rickandmortyapi.com/api/character/1";
// fetch(url_1)
//     .then((respuesta) => respuesta.json())
//     .then((data) => console.log(data.location));

// const url_2 = "https://rickandmortyapi.com/api/character/23";
// fetch(url_2)
//     .then((respuesta) => respuesta.json())
//     .then((data) => console.log(data.location));

// const url_3 = "https://rickandmortyapi.com/api/character/415";
// fetch(url_3)
//     .then((respuesta) => respuesta.json())
//     .then((data) => console.log(data.location));

// const url_4 = "https://rickandmortyapi.com/api/character/670";
// fetch(url_4)
//     .then((respuesta) => respuesta.json())
//     .then((data) => console.log(data.location));




