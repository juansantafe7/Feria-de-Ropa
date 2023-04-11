// //OBTENEMOS EL FORMULARIO DE BUSQUEDA MEDIANTE ID
// const form = document.getElementById('search-form');

// /*ESCUCHAMOS EL EVENTO DE ENVIO "SUBMIT" Y EJECUTAMOS LA FUNCION FILTRARPRODUCTOS*/
// form.addEventListener('submit', filtrarProductos);

// //DECLARAMOS LA FUNCION
// function filtrarProductos(e) {
//     //CREAMOS UN ARREGLO DONDE SE ENCUENTRAN LOS POSIBLES PRODUCTOS
//   const catalogo = ['zapatillas', 'camisetas'];
//   //alert('Formualrio enviado');
//   //OBTENEMOS EL VALUE DEL INPUT "BUSQUEDA"
//   var busqueda = document.getElementById('search-input').value;
//   //console.log(busqueda)
//   //VERIFICAMOS SI LA BUSQUEDA SE ENCUENTRA EN NUESTRO CATALOGO
//    if (catalogo.indexOf(busqueda) > -1) {
//    //EVITAMOS LA RECARGA DE LA PAGINA CON PREVENTDEFAULT
//    e.preventDefault();
//    //OBTENEMOS TODOS LOS PRODUCTOS
//      const productos = document.querySelectorAll('.producto');
//       for (let i = 0; i < productos.length; i++) {
//         const producto = productos[i];
//         //AQUI VALIDAMOS QUE COINCIDA LA BUSQUEDA CON SU CLASE ASIGNADA
//         if (!producto.classList.contains(busqueda)) {
//         //OCULTAMOS LOS QUE NO COINCIDEN
//           producto.style.display = 'none';
//         //MOSTRAMOS LOS QUE SI COINCIDEN
//         }else{
//              producto.style.display = 'block';
//         }
//     }
//    }else{// SI LA BUSQUEDA FALLA, MOSTRAMOS DE NUEVO TODOS LOS PRODUCTOS
//     //EVITAMOS LA RECARGA DE LA PAGINA CON PREVENTDEFAULT
//      e.preventDefault();
//      //ALERTA
//      alert('No existe el producto')
//      const productos = document.querySelectorAll('.producto');
//      for (let i = 0; i < productos.length; i++) {
//        const producto = productos[i];
//        //MOSTRAMOS TODOS LOS PRODUCTOS
//          producto.style.display = 'block';
//      }
//    }
// }

let searchBar = () => {

    var searchValue = document.getElementById('search-bar-01');
    var items = document.getElementsByClassName('product-name');

    for(var i = 0; i < items.length; i++){

        items[i].parentNode.style.display = 'block'

        if(!(items[i].innerHTML.toLowerCase().includes(searchValue.value.toLowerCase()))){

            items[i].parentNode.style.display = 'none'; 

        };

    }

}