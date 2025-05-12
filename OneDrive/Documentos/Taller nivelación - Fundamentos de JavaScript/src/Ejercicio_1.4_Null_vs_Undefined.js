let var1;
let var2 = null;

console.log(var1 == var2);  // true (comparación débil, ambos representan "sin valor")
console.log(var1 === var2); // false (comparación estricta: undefined ≠ null)
