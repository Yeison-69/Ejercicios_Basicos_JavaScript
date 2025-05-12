let a = 5;  // 0101
let b = 3;  // 0011

console.log("Desplazamiento a la izquierda:", a << 1); // 1010 = 10
console.log("Desplazamiento a la derecha:", a >> 1);   // 0010 = 2

console.log("AND:", a & b);  // 0001 = 1
console.log("OR:", a | b);   // 0111 = 7
console.log("XOR:", a ^ b);  // 0110 = 6
