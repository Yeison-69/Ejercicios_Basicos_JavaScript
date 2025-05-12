// Declaración de función
function saludar() {
    console.log("Hola desde una declaración");
}

// Expresión de función
const saludarExpresion = function() {
    console.log("Hola desde una expresión");
};

// Diferencia: las declaraciones se elevan (hoisting), las expresiones no
saludar();
// saludarExpresion(); // Esto daría error si se llama antes de su definición
saludarExpresion();
