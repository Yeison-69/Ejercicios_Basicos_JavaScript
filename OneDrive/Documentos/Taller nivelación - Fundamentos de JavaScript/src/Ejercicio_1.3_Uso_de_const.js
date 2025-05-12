const persona = {
    nombre: "Ana",
    edad: 30
  };
  
  // Modificar una propiedad del objeto (esto es válido)
  persona.edad = 31;
  console.log("Edad modificada:", persona.edad); // 31
  
  // Intentar reasignar el objeto completo (esto lanza un error)
  try {
    persona = { nombre: "Luis", edad: 25 }; // Error
  } catch (error) {
    console.log("Error al reasignar el objeto:", error.message);
  }
  