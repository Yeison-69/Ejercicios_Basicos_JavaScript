
var pesoInput = prompt("Ingresa tu peso en kilogramos (ej. 72.5):");
let peso = parseFloat(pesoInput);

let pesoGramos = peso * 1000;

const PESO_REFERENCIA = 70;

var esMayor = peso > PESO_REFERENCIA;

var resultadoLogico = esMayor && true;

console.log("Peso en gramos:", pesoGramos, "g");
console.log("¿Peso mayor a 70kg?:", esMayor);
console.log("Resultado lógico (esMayor && true):", resultadoLogico);
