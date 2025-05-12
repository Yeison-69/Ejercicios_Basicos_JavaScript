
var precioInput = prompt("Ingresa el precio del producto (ej. 120):");
let precio = parseFloat(precioInput);

const DESCUENTO = 0.10; 


let precioConDescuento = precio - (precio * DESCUENTO);


let esMayorA100 = precio > 100;

let negacion = !esMayorA100;

var sinDefinir;

console.log("Precio con descuento:", precioConDescuento);
console.log("¿Precio mayor a 100?:", esMayorA100);
console.log("Negación (!esMayorA100):", negacion);
console.log("Valor sin definir:", sinDefinir);
