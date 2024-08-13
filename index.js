const ContenedorPez = document.getElementsByClassName('ContenedorPez'); // Selecciona las tarjetas individuales
const Producto = document.getElementsByClassName('Producto');
const Contenido = document.getElementsByClassName('Contenido');
const botonAgregar = document.getElementsByClassName('botonAgregar');
const Carrito = document.getElementById('Carrito');

// Para almacenar los productos en el carrito y sus cantidades
let productosCarrito = JSON.parse(localStorage.getItem('Productos')) || {};

// Iterar sobre todos los botones de agregar
for (let index = 0; index < botonAgregar.length; index++) {
    botonAgregar[index].addEventListener('click', function () {
        AgregarContenido(index);
        GuardarEnlocal(index);
    });
}

function AgregarContenido(index) {
    let CarritoConten = document.createElement('div');
    let btnEliminar = document.createElement('button');
    let elementoCantidad = document.createElement('span');
    
    btnEliminar.innerHTML = 'Eliminar';
    elementoCantidad.textContent = 'Cantidad: 1';
    CarritoConten.innerHTML = Contenido[index].innerHTML;

    CarritoConten.appendChild(elementoCantidad);
    CarritoConten.appendChild(btnEliminar);
    Carrito.appendChild(CarritoConten);

    btnEliminar.addEventListener('click', function () {
        Carrito.removeChild(CarritoConten);
        // Deberías también eliminar el producto de productosCarrito y actualizar localStorage
    });
}

function GuardarEnlocal(index) {
    const productoNombre = Producto[index].textContent.trim();
    
    if (productosCarrito[productoNombre]) {
        productosCarrito[productoNombre]++;
        
    } else {
        productosCarrito[productoNombre] = 1;
    }
    
    localStorage.setItem('Productos', JSON.stringify(productosCarrito));
}