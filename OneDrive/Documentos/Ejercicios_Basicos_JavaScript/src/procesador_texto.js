
let texto = prompt("Escribe un texto:");

const SALUDO = "¡Tu texto es: ";

var textoCompleto = SALUDO + texto;

let esLargo = texto.length > 10;

let negacion = !esLargo;

var vacio = null;

console.log("Texto completo:", textoCompleto);
console.log("¿Texto largo (>10)?", esLargo);
console.log("Negación (!esLargo):", negacion);
console.log("Valor nulo:", vacio);
