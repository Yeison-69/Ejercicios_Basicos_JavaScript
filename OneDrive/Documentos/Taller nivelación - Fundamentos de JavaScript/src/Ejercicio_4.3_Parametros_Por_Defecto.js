function saludar(nombre = "Usuario", idioma = "español", hora = "día") {
    let mensaje;

    if (idioma === "español") {
        mensaje = `Buenos ${hora}, ${nombre}!`;
    } else if (idioma === "inglés") {
        mensaje = `Good ${hora}, ${nombre}!`;
    } else if (idioma === "francés") {
        mensaje = `Bon ${hora}, ${nombre}!`;
    } else {
        mensaje = `Hola, ${nombre}!`;
    }

    console.log(mensaje);
}

saludar(); // Usa todos los valores por defecto
saludar("Lucía", "francés", "soir");
