function mostrarElemento(idElemento) {
    // mostramos el documento
    document.getElementById(idElemento).style.display = "block";
    // lo ocultamos en 10 segundos
    setTimeout(function() {
        document.getElementById(idElemento).style.display = "none";
    }, 10000);
}