function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.opacity = 0; // Opacidad 0
    document.getElementById(idElemento).style.display = "flex"; // O block
    setTimeout(function() {
      document.getElementById(idElemento).style.opacity = 1; // Opacidad 1
    }, 100); // Ajusta el tiempo de espera (en milisegundos)
    // ocultamos el elemento a los 7 segundos
    setTimeout(function() {
      document.getElementById(idElemento).style.opacity = 0; // Opacidad 0
      setTimeout(function() {
        document.getElementById(idElemento).style.display = "none"; // O block
      }, 1000); // Ajusta el tiempo de espera (en milisegundos)
    }, 7000); // Ajusta el tiempo de espera (en milisegundos)
  }
  