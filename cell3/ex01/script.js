function aumentarTamanio() {
    var boton = document.querySelector('.boton-redondo');
    var estilo = window.getComputedStyle(boton);
    var fontSize = parseInt(estilo.getPropertyValue('font-size'));
    boton.style.fontSize = (fontSize + 10) + 'px';
  }

