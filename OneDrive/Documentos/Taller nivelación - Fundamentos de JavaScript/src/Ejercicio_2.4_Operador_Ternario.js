function puedeVotar(edad) {
    return edad >= 18 ? "Puede votar" : "No puede votar";
  }
  
  console.log(puedeVotar(20)); // Puede votar
  console.log(puedeVotar(16)); // No puede votar
  