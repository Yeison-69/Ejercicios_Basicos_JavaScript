function calcularPrecioBoleto(edad) {
    if (edad < 5) {
        return "Gratis";
    } else if (edad >= 5 && edad <= 12) {
        return "5€";
    } else if (edad >= 13 && edad <= 65) {
        return "10€";
    } else {
        return "7€";
    }
}

console.log(calcularPrecioBoleto(70));
