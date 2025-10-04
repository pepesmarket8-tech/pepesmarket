let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  document.getElementById("contador").textContent = carrito.length;
  renderCarrito();
}

function renderCarrito() {
  const itemsCarrito = document.getElementById("itemsCarrito");
  itemsCarrito.innerHTML = "";
  carrito.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.nombre} - $${item.precio}`;
    itemsCarrito.appendChild(div);
  });
  document.getElementById("total").textContent = total;
}

function toggleCarrito() {
  const carritoContenido = document.getElementById("carritoContenido");
  carritoContenido.style.display = carritoContenido.style.display === "block" ? "none" : "block";
}
