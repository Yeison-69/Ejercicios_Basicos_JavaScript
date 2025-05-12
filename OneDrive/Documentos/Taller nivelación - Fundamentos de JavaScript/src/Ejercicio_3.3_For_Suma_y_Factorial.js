function calcularSumaYFactorial(n) {
    let suma = 0;
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        suma += i;
        factorial *= i;
    }

    return { suma, factorial };
}

console.log(calcularSumaYFactorial(5));
