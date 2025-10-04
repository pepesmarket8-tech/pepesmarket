let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const itemsCarrito = document.getElementById('itemsCarrito');
  const contador = document.getElementById('contador');
  const total = document.getElementById('total');
  itemsCarrito.innerHTML = '';
  let suma = 0;

  carrito.forEach(item => {
    itemsCarrito.innerHTML += `<div class="carrito-item">${item.nombre} - $${item.precio}</div>`;
    suma += item.precio;
  });

  contador.innerText = carrito.length;
  total.innerText = suma;
}

function toggleCarrito() {
  document.getElementById('carritoContenido').classList.toggle('abierto');
}