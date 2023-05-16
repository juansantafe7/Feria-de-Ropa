function filtrarProductos() {
    // Obtener la consulta de búsqueda de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');


    // Si la consulta de búsqueda es "zapatilla", mostrar solo los productos de zapatilla
    if (query === 'calzado' || query === 'zapatilla'|| query === 'zapatillas'|| query === 'calzados'|| query === 'zapatilla') {
      const productos = document.querySelectorAll('.producto');
      for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if (!producto.classList.contains('calzado')) {
          producto.style.display = 'none';
        }
      }
    } 
    // Si la consulta de búsqueda es "camiseta", mostrar solo los productos de camiseta
    else if (query === 'remera' || query === 'remeras') {
      const productos = document.querySelectorAll('.producto');
      for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        if (!producto.classList.contains('remera')) {
          producto.style.display = 'none';
        }
      }
    } 
    // Si la consulta de búsqueda no es una palabra clave, prevenir el envío del formulario
    else {
      
        const productos = document.querySelectorAll('.producto');
        for (let i = 0; i < productos.length; i++) {
          const producto = productos[i];
          if (!producto.classList.contains('otro')) {
            producto.style.display = 'none';
          }            
        }
      }
  }
  
  filtrarProductos();

  // Obtener el elemento del campo de entrada
  var searchInput = document.getElementById('search-input');

  // Agregar un controlador de eventos para el evento 'input' del campo de entrada
  searchInput.addEventListener('input', function() {
    // Convertir el valor del campo de entrada a minúsculas
    searchInput.value = searchInput.value.toLowerCase();
  });