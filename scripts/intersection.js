const elementosOcultos = document.querySelectorAll('.elemento-oculto');
const referenciaInferior = document.querySelector('.referencia-inferior');

const opciones = {
  root: null,
  threshold: [0, 1], // Observar entrada y salida del viewport
};

const observador = new IntersectionObserver((entradas, observador) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('interseccion');
    } else {
      entrada.target.classList.remove('interseccion');
    }

    if (entrada.boundingClientRect.bottom < 0) {
      entrada.target.classList.add('interseccion-inferior');
    } else {
      entrada.target.classList.remove('interseccion-inferior');
    }
  });
});

elementosOcultos.forEach(elemento => observador.observe(elemento, opciones));
observador.observe(referenciaInferior, opciones);
