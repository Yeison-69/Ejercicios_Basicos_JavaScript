
let altura = parseFloat(prompt("Ingresa tu altura en metros (por ejemplo, 1.75):"));

let alturaCm = altura * 100;

var alturaMm = alturaCm * 10;

const ALTURA_REFERENCIA = 1.5;

let esAlta = altura > ALTURA_REFERENCIA;

var sinValor;

console.log("Altura en centímetros:", alturaCm, "cm");
console.log("Altura en milímetros:", alturaMm, "mm");
console.log("¿Es una persona alta (> 1.5m)?", esAlta);
console.log("Valor de variable sin asignar:", sinValor);
