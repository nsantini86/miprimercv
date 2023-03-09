function mostrarAlerta() {
    alert("¡Hola Mundo!, este es mi unico trabajo realizado");
  }
  function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'holamundo.pdf';
    enlace.download = 'holamundo.pdf';
    enlace.click();
  }
  
  
  