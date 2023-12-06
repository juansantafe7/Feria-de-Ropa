window.addEventListener('scroll', function() {
    var arrowLink = document.getElementById('arrowLink');
    if (window.scrollY > 100) { // Cambia 100 a la posición en la que quieres mostrar el enlace
      arrowLink.style.display = 'block';
    } else {
      arrowLink.style.display = 'none';
    }
  });