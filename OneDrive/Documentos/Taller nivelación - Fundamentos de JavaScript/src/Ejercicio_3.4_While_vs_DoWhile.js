// while
let numeroSecreto = 7;
let intento = parseInt(prompt("Adivina el número (1-10):"));
while (intento !== numeroSecreto) {
    intento = parseInt(prompt("Incorrecto. Intenta de nuevo:"));
}
console.log("¡Correcto!");

// do-while
let adivinar;
do {
    adivinar = parseInt(prompt("Adivina el número (1-10):"));
} while (adivinar !== numeroSecreto);
console.log("¡Correcto!");
