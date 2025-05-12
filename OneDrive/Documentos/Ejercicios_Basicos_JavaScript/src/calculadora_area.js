
var anchoInput = prompt("Ingresa el ancho del rectángulo:");
let alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));
var ancho = parseFloat(anchoInput);

let area = ancho * alto;

const AREA_MINIMA = 50;

let esGrande = area > AREA_MINIMA;

var sinDefinir;

console.log("Área del rectángulo:", area);
console.log("¿Área mayor a 50?:", esGrande);
console.log("Valor sin definir:", sinDefinir);
