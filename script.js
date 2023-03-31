
const productos = [
{
  id:1,
nombre:"Buzo de Algodon",
precio:4898,
img:"buzoAlgodon.jpg",
cantidad:0
},
{
  id:2,
  nombre:"Buzo Bordado",
  precio:12320,
  img:"buzoBordado.jpg",
  cantidad:0
}, 
{
  id:3,
  nombre:"Buzos Frizados",
  precio:7560,
  img:"buzoFrizado.jpg",
  cantidad:0
},
{
  id:4,
  nombre:"Jean",
  precio:8680,
  img:"jean.jpg",
  cantidad:0
},
{
  id:5,
  nombre:"Jogger",
  precio:10080,
  img:"jogger.jpg",
  cantidad:0
},
{
  id:6,
  nombre:"Jogger con Rotura",
  precio:10080,
  img:"joggerCRotura.jpg",
  cantidad:0
},
{
  id:7,
  nombre:"Remera Glorius",
  precio:4980,
  img:"remeraGlorius.jpg",
  cantidad:0
},
{
  id:8,
  nombre:"Remera Break",
  precio:4980,
  img:"remeraBreak.jpg",
  cantidad:0
},
{
  id:9,
  nombre:"Remera Chill",
  precio:4980,
  img:"remeraChill.jpg",
  cantidad:0
}
];

let carrito = []
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        renderCarrito()
    }
})
const ventanaSecundaria = document.getElementById("ventanaSecundaria")
const main = document.querySelector(".ventanaPrincipal")


function renderProductos(){
  
      productos.forEach((prod)=>{
       main.innerHTML += `<div class="card">
       <div class="containFoto">
       <img src=${"img/" + prod.img} class="fotos" alt= "">
       </div>
       <div class="containProduct">
       <h3 class="nombreProducto">${prod.nombre}</h3>
       <p class="precioProducto">Precio: $${prod.precio}</p>
       <p class="precio3cuotas">3 cuotas sin interés de $${calculartarjeta3cuotas(prod.precio)}</p>
       <button id="agregar${prod.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
       </div>
       </div>`
})
activarBotones();
}

function activarBotones(){
  productos.forEach((producto)=>{
    document.getElementById(`agregar${producto.id}`).addEventListener(`click`,()=>{agregarAlCarrito(producto)})
  })
}


function agregarAlCarrito(prod) {
  let existe =carrito.some(item => item.id === prod.id);
  if (existe) {
      const miProd = carrito.find(item => item.id === prod.id);
      miProd.cantidad += 1;
  } else {
      prod.cantidad = 1;
      carrito.push(prod);
  }
  renderCarrito();
  renderBotonCarrito();
}


function renderBotonCarrito(){
document.getElementById("contadorCarrito").innerText =carrito.reduce((total, item) => total += item.cantidad, 0);

}

function renderCarrito(){
  ventanaSecundaria.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        ventanaSecundaria.appendChild(div)
        localStorage.setItem(`carrito`,JSON.stringify(carrito))
  
       
})
renderBotonCarrito()
preciototal()
}

function preciototal(){
  const precioTotal = document.getElementById('precioTotal')
  const precioCDescuento = document.getElementById('precioefectivo')
  const precioECuotas = document.getElementById('precio3cuotas')
  let montototal = parseInt(carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0));
  precioTotal.innerText = montototal
  precioCDescuento.innerText = calculaefectivo(montototal)
  precioECuotas.innerText = calculartarjeta3cuotas(montototal)
  
}

function calculaefectivo(monto) {
  return Math.round(monto * 0.75);
}

function calculartarjeta3cuotas(monto) {
  return Math.round(monto / 3);
}

function vaciarCarrito(){
  carrito.length = 0;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderBotonCarrito()
  preciototal()  
  renderCarrito()
}

function eliminarDelCarrito (prodId) {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1) 
  localStorage.setItem("carrito", JSON.stringify(carrito))
  renderBotonCarrito()
  preciototal()  
  renderCarrito()
}


renderProductos()





