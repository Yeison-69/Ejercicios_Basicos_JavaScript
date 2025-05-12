function puedeConducir(edad, tieneCarnet, estaInhabilitado) {
    return edad >= 18 && tieneCarnet && !estaInhabilitado;
  }
  
  console.log(puedeConducir(20, true, false)); // true
  console.log(puedeConducir(17, true, false)); // false
  