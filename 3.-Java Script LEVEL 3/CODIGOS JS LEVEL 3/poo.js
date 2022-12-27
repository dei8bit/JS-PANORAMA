/*
//# OBJETOS:

//. Declaracion del objeto:

//$ Ejemplo 1:
const persona = {
    nombre: "carlos",
    apellido: "pergolini",
    edad: 29.8,
    nacionalidad: "marciano",
    existe: true
}

//$ Ejemplo 2:
const frutas = {
    1: "banana",
    2: "manzana",
    3: "pera",
    4: "morron"
}

//$ Ejemplo 3:
const numero = {
    "numero 4": 4,
    "numero 20": 20,
    "numero 30": 30
}


//. Objetos anidados:

const saludos = {
    comun: "hola!",
    animado : "Hola que bueno verte",
    excentrico: "Me exalto ante su presencia"
}

const nombres = {
    1: "Miguel Angel" ,
    2: "Clarita",
    3: "Socrates"
}

// forma1:
const saludarNombres_1 = {
    saludos: saludos,
    nombres : nombres
}
console.log(saludarNombres_1.saludos);
console.log(saludarNombres_1.nombres);

// forma2:
const saludarNombres_2 = {
    saludos,
    nombres
}
console.log(saludarNombres_2.saludos);
console.log(saludarNombres_2.nombres);


//. Mostrar el objeto

console.log(persona);
console.log(frutas);
console.log(numero);

//. Mostrar sus propiedades:

console.log(persona.nombre);
console.log(frutas[1]);
console.log(numero["numero 4"]);

//. Modificar sus propiedades:
persona.nombre =  "Rigoberto"
frutas[1] = "melocoton"
numero["numero 4"] = 15+15; 

console.log(persona.nombre);
console.log(frutas[1]);
console.log(numero["numero 4"]);

//. Buscar propiedades:

console.log(persona.hasOwnProperty('nombre'));
console.log(persona.hasOwnProperty('peso'));
console.log(frutas.hasOwnProperty('1'));
console.log(frutas.hasOwnProperty('7'));

//. Eliminar propiedades:

console.log(persona);
delete persona.apellido;
delete persona.nacionalidad;
console.log(persona);

//. Freezar un objeto:
const ubicacion = {
    EjeX : "10",
    EjeY : "42",
    EjeZ : "99"
}


console.log(ubicacion)  /// objeto orginal:

ubicacion.EjeY = "987654";
console.log(ubicacion)  /// objeto mutable antes del friz:

Object.freeze(ubicacion);
ubicacion.EjeY = "0"
console.log(ubicacion); /// objeto inmutable despues del friz:

*/

/*
//# DESESTRUCTURACION:
//-Permite hacer uso de un objeto con una sintaxis mejor.
//. Desustructuracion de objetos:

// //$ Ejemplo 1:
//+ desestructuracion basica
const persona = {
  nombre: "pepe",
  apellido: "romano",
  edad: "24",
};

const nom = persona.nombre;
const ape = persona.apel;
const eda = persona.edad;

const { nombre, apellido, edad } = persona;
console.log(`${nombre} ${apellido} ${edad} años`);

// //$ Ejemplo 2:
//+ desestructuracion basica
const cartuchera = {
  lapices: 30,
  fibrones: ["azul", "amarillo", "verde"],
  cierre: true,
  alto: "6cm",
  largo: "17cm",
};

const { lapices, fibrones, cierre } = cartuchera; //destructuracion del objeto
console.log(lapices, cierre, fibrones);

// //$ Ejemplo 3:
//+ desestructuracion de objetos anidados

const comida = {
  frutas: {
    manzana: "roja",
    pera: "verde",
    morron: "amarillo",
  },
};
const {
  frutas: { manzana, pera, morron },
} = comida;
console.log(`manzana: ${manzana} pera: ${pera} morron: ${morron}`);

// //$ Ejemplo 4:
// //+ desestructuracion con un alias.
const libros = {
  homo_deus: {
    autor: "Yuval Noah Harari",
    genero: "historia",
    publicacion: "2015",
  },
  guerra_y_paz: {
    autor: " Leon Tolstói",
    genero: "novela belica",
    publicacion: "1867",
  },
};

const {
  homo_deus: {
    autor: autor_Hom,
    genero: genero_Hom,
    publicacion: publicacion_Hom,
  },
} = libros;
const {
  guerra_y_paz: {
    autor: autor_Tol,
    genero: genero_Tol,
    publicacion: publicacion_Tol,
  },
} = libros;

console.log(
  `Homo Deus; de: ${autor_Hom} genero: ${genero_Hom} publicacion: ${publicacion_Hom}`
);
console.log(
  `La guerra y la paz; de : ${autor_Tol} genero: ${genero_Tol} publicacion: ${publicacion_Tol}`
);


//$ Ejemplo 5:
//+ Objetos como argumento con la sintaxis de desestructuracion.

const elementos = {
  Cl:"Cloro",
  Ar:"Argón",
  K:"Potasio",
  Ca:"Calcio"
}

//+ forma 1:
const obtenerElementos = (objetoNombre)=>{
  const {Cl,Ar,K,Ca} = objetoNombre;
  console.log(Cl);
  console.log(Ar);
  console.log(K);
  console.log(Ca);
}
obtenerElementos(elementos);

//+ forma 2:
const obtenerElementos = ({Cl,Ar,K,Ca})=>{
  console.log(Cl);
  console.log(Ar);
  console.log(K);
  console.log(Ca);
}
obtenerElementos(elementos);

//+ forma 3:
const mostrarDosElementos = ({Cl,Ca})=>{console.log(`Cl significa ${Cl}: Ca significa: ${Ca}`);}
mostrarDosElementos(elementos)

//$ Ejemplo 6:
//+ Objetos creador de forma concisa

//+ forma 1:
const criptoMoneda = (cantidad,valor,nombre,minable)=>({cantidad,valor,nombre,minable});
console.log(criptoMoneda(1692,"$0.89","criptonita",true));
//+ forma 2:
const pepe = criptoMoneda([12000,14000],"$0.40","pepitas",{objetoClave:"objetoValor"});
console.log(pepe);


//. Desustructuracion de arreglos:
//-Permite hacer uso de un arreglo con una sintaxis mejor.
//$ Ejemplo 1:

var a;
var b;
[a, b] = [1, 2];
console.log(a);
console.log(b);

//$ Ejemplo 2:
//+Acceder a elementos lejanos con varias comas
var a;
var b;
var c;
[a, b,,,,,c] = [1, 2,3,4,5,6,7,8];
console.log(a);
console.log(b);
console.log(c);

//$ Ejemplo 3:
const te = ["menta", "jengibre", "rosa mosqueta", "verde"];

//+ Prueba 1:
const [te1, te2, te3, te4] = te;
console.log(te1, te2);

//+ Prueba 2:
const [te1, te2, te3, te4, te5] = te;
console.log(te4, te3, te5);

//+ Prueba 3:
const [te1, te2, te3, te4, te5 = "rojo"] = te;
console.log(te4, te3, te5);


//$ Ejemplo 4:
//+ Combinar desestructuracion con operador rest:

var a;  
var b;
var c;

[a,b,...c ] = [1,2,3,4,5,6,7,8,9,10]

console.log(a);
console.log(b);
console.log(c);
*/

/*

//# METODOS:
//-Funcionalidades dentro del objeto:

//. Metodos con funciones tradicionales:
const saludos = {
  saludo_1 : function (){return "hola"},
  saludo_2 : function (){return "Que tal"},
  saludo_3 : function (){return "Buenas tardes"},
}

console.log(saludos.saludo_1());
console.log(saludos.saludo_2());
console.log(saludos.saludo_3());

//. Metodos con funciones flecha:
const sumas = {
  sumaDos : (n1,n2) => n1+n2,
  sumaTres : (n1,n2,n3) => n1+n2+n3
}
console.log(sumas.sumaDos(2,3));
console.log(sumas.sumaTres(3,6,9));

//. Object.assign:
//+ Permite copiar  las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

// $ Ejemplo 1:

// const objetivo = {};
// const fuente = { 1: "a", 2: "b" };

// console.log("ANTES");
// console.log(objetivo);
// console.log(fuente);

// Object.assign(objetivo, fuente);

// console.log("DESPUES");
// console.log(objetivo);
// console.log(fuente);


// $ Ejemplo 2:

// const objetivo = { a: 1};
// const fuente = { b: 4, c: 5 };

// console.log(objetivo);
// console.log(fuente);
// console.log(Object.assign(objetivo, fuente));


// $ Ejemplo 3:

// const objetivo = { a: 1};
// const fuente = { a: 2, b: 4, c: 5 };

// console.log(Object.assign(objetivo, fuente));

// $ Ejemplo 4:

// var o1 = { a: 0, b: 0, c: 0 };
// var o2 = { b: 7, c: 7 };
// var o3 = { c: "♥" };
// var o4 = { a: "🧡", d:"💚" };

// console.log(Object.assign(o1, o2));
// console.log(Object.assign(o1, o3));
// console.log(Object.assign(o1, o4));

// $ Ejemplo 5:

// const objetivo = { nombre: "pedro", apellido: "jorjelinez" };
// const fuente = { edad: 22, altura: "215 Cm" };

// console.log(Object.assign(objetivo, fuente));

// $ Ejemplo 6:

// var obj1 = { a: 1 };
// var obj2 = { b: 2 };
// var obj3 = { c: 3 };


//_Sintaxis 1: 
// console.log(Object.assign(obj1, obj2, obj3));


//_Sintaxis 2: 
// console.log("ANTES");
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// var objetoFinal = Object.assign(obj1, obj2, obj3);

// console.log(objetoFinal);

// console.log("DESPUES");
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//+Comprobando la igualdad 
// console.log(objetoFinal === obj1);
// console.log(objetoFinal === obj2);
// console.log(objetoFinal === obj3);

//. Object values:
//- Permite enumerar las propiedades de un objeto.

const reinosSeresVivos = {
  1: "Animal",
  2: "Vegetal",
  3: "Fungi",
  4: "Protocista",
  5: "monera",
}

console.log(Object.values(reinosSeresVivos));


const nombresApellidos = {
  "Manuel":"Garcia",
  "Pedro":"Perez",
  "Jorje":"Fernandez",
  "Nahuel":"Rodriguez",
}
console.log(Object.values(nombresApellidos));

//. THIS:
//- Permite usar las propiedades de un objeto en el objeto mismo.

//$ Prueba sin this :
const saludos = {
  saludo1: "Hola",
  saludo2: "Buenas",
  saludo3: "Tardes",
  saludoFinal : function () {return `${saludo1} ${saludo2} ${saludo3} `}
}
console.log(saludos.saludoFinal());

// //$ Ejemplo 1:
const saludos = {
  saludo1: "Hola",
  saludo2: "Buenas",
  saludo3: "Tardes",
  saludoFinal : function () {return `${this.saludo1} ${this.saludo2} ${this.saludo3} `}
}
console.log(saludos.saludoFinal());

// //$ Ejemplo 1 con funcion flecha:

const saludos = {
  saludo1: "Hola",
  saludo2: "Buenas",
  saludo3: "Tardes",
  saludoFinal :  ()=> {return `${this.saludo1} ${this.saludo2} ${this.saludo3} `}
}
console.log(saludos.saludoFinal());


//$ Ejemplo 2:

const operaciones = {
  1: 2+2,
  2: 3+3,
  3: 4+4,
  calculo: function (operacion) {return this[operacion] }
}
console.log(operaciones.calculo(1));
console.log(operaciones.calculo(2));
console.log(operaciones.calculo(3));
 */

/*
//# CLASES:
//- Permiten definir estructuras para crear multiples objetos

//. Constructor:
//-Es la funcion que se llama al crear un objeto con una clase.

// $ Ejemplo 1:
class Humano {
  constructor(nombre,apellido){
      this.nombre = nombre;
      this.apellido = apellido;
  }
}

//$ Ejemplo 2:
class Humano {
  constructor(nombr,apel){
      this.nombre = nombr;
      this.apellido = apel;
  }
}

// //$ Ejemplo 3:
class Ukelele {
  constructor(color,modelo){
    this.color = color;
    this.modelo = modelo;
  }
}

console.log(Ukelele);


//. Instansiacion:
//- representa el momento en el que se usa una clase para crear un objeto.

// $ Ejemplo 1:
const emperador = new Humano("Julio","Cesar");
console.log(emperador);
const genio = new Humano("Leonardo","DaVinci");
console.log(genio);

//$ Ejemplo 2:
primerukelele =  new Ukelele("rojo", "xt40");
console.log(primerukelele);
console.log(primerukelele.color);
console.log(primerukelele.modelo);

//. Vulnerabilidad de  objetos en JS:

const objetoGenerico = {
  propiedad1: "valor1",
  metodo1: (n1,n2)=>{return n1+n2},
  metodo2: (frase)=>{return `Dijiste: ${frase}`},
}
//$ Revisando objeto por consola: 
console.log(objetoGenerico);
console.log(objetoGenerico.propiedad1);
console.log(objetoGenerico.metodo1);
console.log(objetoGenerico.metodo2);
console.log(objetoGenerico.metodo1(9,5));
console.log(objetoGenerico.metodo2("Easy Peasy Lemon Squeezy"));

Object.freeze(objetoGenerico); ///Posible solucion

//$ alterando el objeto: 
objetoGenerico.propiedad1 = "galletita"
objetoGenerico.metodo1 = {propiedadNueva: "valorNuevo"}
objetoGenerico.metodo2 = function funcionIntrusa(){}

console.log(objetoGenerico);
console.log(objetoGenerico.propiedad1);
console.log(objetoGenerico.metodo1);
console.log(objetoGenerico.metodo2);


//. Getters Y Setters:
//- Se priorizan ante la llamada o modificacion de una propiedad deseada.


//$ Ejemplo 1:
// class humano {
//   constructor(nombre, edad) {
//     this._nombre = nombre;
//     this._edad = edad;
//   }
//   get nombre() {
//     console.log("llamaste al getter");
//   }
//   set nombre(w) {
//     console.log("llamaste al setter");
//   }
// }

// console.log(humano);
// humano1 = new humano("pepe", "22"); ///Creamos el humano con su clase
// console.log(humano1);
// console.log(humano1.nombre);
// humano1.nombre = "algo";

//$ Ejemplo 2:

// class humano {
//   constructor(nombre, edad) {
//     this._nombre = nombre;
//     this._edad = edad;
//   }

//   get nombre() {return `El nombre del humano es: ${this._nombre}`}
//   set nombre(nuevoNombre) {this._nombre =nuevoNombre}
// }

// const humanoNuevo = new humano("Jorjelin","99 años");

// console.log(humanoNuevo.nombre); 
// humanoNuevo.nombre = "piter";
// console.log(humanoNuevo.nombre); 


//. Variables Estaticas:

class animal {
    constructor(nombre,especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    static caracteristica = "organismo pluricelular";
    static saludo= ()=> {return "Buongiorno!"}
}
const leo = new animal("Leonardo","humana");
console.log(leo);

console.log(animal.caracteristica)
console.log(animal.saludo());

*/

/*


// # HERENCIA:

//. Extends:
//- Permite que una clase se extienda a otra.

//$ Ejemplo 1:

class fisica{
  constructor(espacio, tiempo){
      this.espacio = espacio;
      this.tiempo = tiempo;
  }
}

class materia extends fisica{}
const atomo = new materia("cuantico","atemporal");
console.log(atomo);


//$ Ejemplo 2:

class animal{
  constructor(nombre, especie){
      this.nombre = nombre;
      this.especie = especie;
  }
  mostrarEspecie(){return this.especie;}
}

class humano extends animal{};

const animal_1 = new animal("Cabra","Mamifero");
const humano_1 = new humano("Borges","Homo Sapiens");

console.log(animal_1.mostrarEspecie());
console.log(humano_1.mostrarEspecie());
console.log(animal_1);
console.log(humano_1);

 */

/*

//. Super:
//- Permite que una clase hija pueda  usar los metodos o atributos que hereda.

//+ SUPER CON PROPIEDADES:

class SerVivo {
  constructor(dominio, reino, genero, especie) {
    this.dominio = dominio;
    this.reino = reino;
    this.genero = genero;
    this.especie = especie;
  }
}
//$ Ejemplo 1:

//+ desglose 1:

class cabra extends SerVivo{};
console.log(cabra);

const Capra_falconeri = new cabra("eucariota","animalia","capra","C. aegagrus");
console.log(Capra_falconeri);

// + desglose 2:
class cabra extends SerVivo{
  constructor(colorPelaje){
    this.colorPelaje = colorPelaje;
  }
};

const Capra_falconeri = new cabra();

// + desglose 3:
class cabra extends SerVivo{
  constructor(colorPelaje){
    super(dominio,reino,genero,especie)
    this.colorPelaje = colorPelaje;
  }
};
const Capra_falconeri = new cabra();

// + desglose 4:
class cabra extends SerVivo{
  constructor(colorPelaje,dominio,reino,genero,especie){
    super(dominio,reino,genero,especie)
    this.colorPelaje = colorPelaje;
  }
};
const Capra_falconeri = new cabra();
console.log(Capra_falconeri);

//$ Ejemplo 2:

class humano extends SerVivo {
  constructor(nombre, ocupacion, dominio, reino, genero, especie) {
    super(reino, dominio, genero, especie);
    this.nombre = nombre;
    this.ocupacion = ocupacion;
  }
}

const Tesla = new humano(
  "Nikola Tesla",
  "Inventor",
  "eucariota",
  "animalia",
  "Homo",
  "Homo sapiens"
);
console.log(Tesla);

// + SUPER CON METODOS:

class presentacion {
  constructor(nombre, oficio, meta) {
    this.nombre = nombre;
    this.oficio = oficio;
    this.meta = meta;
  }
  presentacion1() {
    console.log(`Me llamo ${this.nombre}`);
  }
  presentacion2() {
    console.log(`Mi oficio  es: ${this.oficio}`);
  }
  presentacion3() {
    console.log(`Mi meta  es: ${this.meta}`);
  }
}

//+ desglose 1:
class humano extends presentacion{
  constructor(nombre,oficio,meta,edad){
    super(nombre,oficio,meta)
    this.edad = edad
  }
  decirEdad(){console.log(`Mi edad  es: ${this.edad}`);}

}

const pepe  = new humano("pepe","verdulero","Crear una verdura","86 años");
pepe.decirEdad();
console.log(pepe.nombre);
console.log(pepe.oficio);
console.log(pepe.meta);
console.log(pepe.edad);
pepe.decirEdad()
pepe.presentacion1();
pepe.presentacion2();
pepe.presentacion3();
console.log(pepe);

//+ desglose 2:

class humano extends presentacion {
  constructor(nombre, oficio, meta, edad) {
    super(nombre, oficio, meta);
    this.edad = edad;
  }
  presentacion1() {
    super.presentacion1();
  }

  presentacionHumano() {
    console.log(`Mi edad  es: ${this.edad}`);
  }
}

const pepe = new humano("pepe", "verdulero", "Crear una verdura", "86 años");
console.log(pepe);


// . Instance of :
// - Nos permite saber si un objeto pertenece o no a una instancia.

//$ Ejemplo 1:
class continente{}
class color{}
class liquido{}

const america = new continente;
const amarillo = new color;
const jugo = new liquido;

console.log(america instanceof continente);
console.log(amarillo instanceof color);
console.log(jugo instanceof liquido);

//$ Ejemplo 2:

const cualquierObjeto_1  = []
const cualquierObjeto_2  = function name(params) {}
const cualquierObjeto_3  = ()=>{}
const cualquierObjeto_4  = {}

console.log(cualquierObjeto_1 instanceof Object);
console.log(cualquierObjeto_2 instanceof Object);
console.log(cualquierObjeto_3 instanceof Object);
console.log(cualquierObjeto_4 instanceof Object);

$ Ejemplo 3:
var cualquiercosa;
console.log(cualquiercosa instanceof Object);

 */


