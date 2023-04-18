const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonAbrir = document.getElementById("boton-carrito");
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

botonCerrar.addEventListener("click", () => {
  setTimeout(() => {
    contenedorModal.classList.toggle("modal-active");
  }, 400);
});

contenedorModal.addEventListener("click", () => {
  setTimeout(() => {
     contenedorModal.classList.toggle("modal-active");
  }, 400);
});

modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation(); 
});

