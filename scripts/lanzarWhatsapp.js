// Función para generar la URL de WhatsApp
function generarURLWhatsApp(numeroTelefono, mensaje) {
    // Reemplazar caracteres especiales en el mensaje
    mensaje = mensaje.replace(/ /g, "%20");
    mensaje = mensaje.replace(/%/g, "%25");
  
    // Generar la URL
    const url = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  
    return url;
  }

// Path: scripts/lanzarWhatsapp.js
function lanzarWhatsApp() {
    // Número de teléfono
    const numeroTelefono = "3861003209";
  
    // Mensaje
    const mensaje = "Hola, estoy interesado en sus servicios";
  
    // Generar la URL
    const url = generarURLWhatsApp(numeroTelefono, mensaje);
  
    // Abrir la URL en una nueva pestaña
    window.open(url);
}
