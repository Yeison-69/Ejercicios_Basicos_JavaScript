
var nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));

const DIAS_POR_ANIO = 365;

let edadEnDias = edad * DIAS_POR_ANIO;

let nombreCorto = nombre.length < 5;

let valorNulo = null;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Edad en días:", edadEnDias);
console.log("¿Nombre corto (<5 caracteres)?", nombreCorto);
console.log("Valor nulo:", valorNulo);
