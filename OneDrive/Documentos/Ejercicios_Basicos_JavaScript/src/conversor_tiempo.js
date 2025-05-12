
var horas = parseFloat(prompt("Ingresa una cantidad de horas (ej. 2.5):"));

const MINUTOS_POR_HORA = 60;
const SEGUNDOS_POR_MINUTO = 60;

let minutos = horas * MINUTOS_POR_HORA;
var segundos = minutos * SEGUNDOS_POR_MINUTO;

let esMayorQueUnaHora = horas > 1;

console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("¿Mayor a 1 hora?:", esMayorQueUnaHora);
