
var distanciaInput = prompt("Ingresa una distancia en kilómetros (ej. 0.5):");
let distancia = parseFloat(distanciaInput);

const METROS_POR_KM = 1000;
const CENTIMETROS_POR_METRO = 100;

let metros = distancia * METROS_POR_KM;
var centimetros = metros * CENTIMETROS_POR_METRO;

let esMenorQueUno = distancia < 1;

var valorNull = null;

console.log("Distancia en metros:", metros);
console.log("Distancia en centímetros:", centimetros);
console.log("¿Distancia menor a 1 km?:", esMenorQueUno);
console.log("Valor nulo:", valorNull);
