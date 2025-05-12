
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma = numero1 + numero2;
var diferencia = numero1 - numero2;

let sonIguales = numero1 === numero2;

let resultadoLogico = sonIguales || false;

console.log("Suma:", suma);
console.log("Diferencia:", diferencia);
console.log("¿Son estrictamente iguales?:", sonIguales);
console.log("Resultado lógico (sonIguales || false):", resultadoLogico);
