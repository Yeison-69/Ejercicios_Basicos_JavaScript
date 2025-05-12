
let nombre = prompt("Ingresa tu nombre:");
var edadInput = prompt("Ingresa tu edad:");
let edad = parseInt(edadInput);
var pesoInput = prompt("Ingresa tu peso en kilogramos:");
let peso = parseFloat(pesoInput);

const MESES_POR_ANIO = 12;

let edadMeses = edad * MESES_POR_ANIO;
var pesoGramos = peso * 1000;

let nombreVacio = nombre === "";
let edadEsPar = edad % 2 === 0;

let combinacionLogica = nombreVacio || edadEsPar;

console.log("Nombre:", nombre);
console.log("Edad en meses:", edadMeses);
console.log("Peso en gramos:", pesoGramos);
console.log("¿Nombre vacío?:", nombreVacio);
console.log("¿Edad es par?:", edadEsPar);
console.log("Resultado lógico (nombreVacio || edadEsPar):", combinacionLogica);
