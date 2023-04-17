let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    renderCarrito();
  }
});
const ventanaSecundaria = document.getElementById("ventanaSecundaria");
const main = document.querySelector(".ventanaPrincipal");

function renderProductos() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((prod) => {
        main.innerHTML += `<div id="card${prod.id}" class="card">
       <div class="containFoto">
       <img src=${"img/" + prod.img} class="fotos" alt= "">
       </div>
       <div class="containProduct">
       <h3 class="nombreProducto">${prod.nombre}</h3>
       <p class="precioProducto">Precio: $${prod.precio}</p>
       <p class="precio3cuotas">3 cuotas sin interés de $${calculartarjeta3cuotas(
         prod.precio
       )}</p>
       <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
       </div>
       </div>`;
      });
    })
    .catch(() => {
      console.log("No se cargaron los productos");
    });
  activarBotones();
}

async function activarBotones() {
  const resp = await fetch("data.json");
  const data = await resp.json();

  data.forEach((producto) => {
    document
      .getElementById(`card${producto.id}`)
      .addEventListener(`click`, () => {
        agregarAlCarrito(producto);
      });
  });
}

function agregarAlCarrito(prod) {
  let existe = carrito.some((item) => item.id === prod.id);
  if (existe) {
    const miProd = carrito.find((item) => item.id === prod.id);
    miProd.cantidad += 1;
  } else {
    prod.cantidad = 1;
    carrito.push(prod);
  }
  renderCarrito();
  renderBotonCarrito();
}

function renderBotonCarrito() {
  document.getElementById("contadorCarrito").innerText = carrito.reduce(
    (total, item) => (total += item.cantidad),
    0
  );
}

function renderCarrito() {
  if (carrito.length > 0) {
    ventanaSecundaria.innerHTML = "";
    carrito.forEach((prod) => {
      ventanaSecundaria.innerHTML += `
        <div class="productoEnCarrito">
        <div class="containFotosCarrito">
        <img src=${"img/" + prod.img} class="fotoscarrito" alt= "">
        </div>
        <div class="caja">
        <p>${prod.nombre}</p>
        </div>
        <div class="caja">
        <p>Precio:$${prod.precio}</p>
        </div>
        <div class="caja">
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        </div>
        <button onclick="eliminarDelCarrito(${
          prod.id
        })" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>`;

      localStorage.setItem(`carrito`, JSON.stringify(carrito));
    });
    ventanaSecundaria.innerHTML += `<p class="precioTotal precios">PRECIO TOTAL: $<span id="precioTotal">0</span></p>
<p class="precios">➜ 25% OFF EFECTIVO: $<span id="precioefectivo">0</span></p>
<p class="precios">➜ 3 CUOTAS SIN INTERÉS: 3 x $<span id="precio3cuotas">0</span></p>
<button id="vaciar-carrito" onclick="vaciarCarrito()" class="boton-agregar">Vaciar carrito</button>
`;
    renderBotonCarrito();
    preciototal();
  } else {
    ventanaSecundaria.innerHTML = `<div> <p class="carritoVacio">No hay productos en el carrito</p></div>`;
  }
}

function preciototal() {
  const precioTotal = document.getElementById("precioTotal");
  const precioCDescuento = document.getElementById("precioefectivo");
  const precioECuotas = document.getElementById("precio3cuotas");
  let montototal = parseInt(
    carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  );
  precioTotal.innerText = montototal;
  precioCDescuento.innerText = calculaefectivo(montototal);
  precioECuotas.innerText = calculartarjeta3cuotas(montototal);
}

function calculaefectivo(monto) {
  return Math.round(monto * 0.75);
}

function calculartarjeta3cuotas(monto) {
  return Math.round(monto / 3);
}

function vaciarCarrito() {
  carrito.length = 0;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderBotonCarrito();
  renderCarrito();
}

function eliminarDelCarrito(prodId) {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  avisoProdEliminado();
  renderBotonCarrito();
  renderCarrito();
}

function avisoProdEliminado() {
  Toastify({
    text: "El producto fue eliminado correctamente",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #666, #888)",
    },
    onClick: function () {},
  }).showToast();
}

renderProductos();
