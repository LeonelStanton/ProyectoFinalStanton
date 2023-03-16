class product{
  constructor (nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
  }

}

function iniciar(){
const productArray = [];
let termine=false;
let indice=1;
agregarProduc(indice);
indice++;
while (!termine){
  let seguirAgregando = parseInt(prompt(
      "----------------------------------------------------------------------------" +
        "\n" +
        "Quiere seguir agregando productos a su compra:" +
        "\n" +
        "(1) Si" +
        "\n" +
        "(2) No" +
        "\n" +
        "----------------------------------------------------------------------------"
    ))
    if (seguirAgregando==1){
      agregarProduc(indice);
      indice++;
    }
    else termine=true;
}

mostrarProductos();
let opcion =
  prompt(
    "----------------------------------------------------------------------------" +
      "\n" +
      "Ahora por favor ingrese una de las siguientes opciones:" +
      "\n" +
      "- Ingrese el nombre del producto que desea adquirir" +
      "\n" +
      "- Ingrese un monto y le mostramos que producto puede comprar" +
      "\n" +
      "- No ingrese nada si desea adquirir todos" +
      "\n" +
      "----------------------------------------------------------------------------"
  );

const estaProduc = productArray.some(Producto => Producto.nombre === opcion);
while (opcion !="" && !estaProduc && isNaN(opcion) ) {
  opcion = 
    prompt(
      "----------------------------------------------------------------------------" +
        "\n" +
        "Por favor ingrese una opcion correcta:" +
        "\n" +
        "(#) Ingrese el nombre del producto que desea adquirir" +
        "\n" +
        "(#) Ingrese un monto y le mostramos que producto puede comprar" +
        "\n" +
        "(#) No ingrese nada si desea adquirir todos" +
        "\n" +
        "----------------------------------------------------------------------------"
    );
}

if (opcion == "") {
  let total = productArray.reduce((acumulador,elemento)=> acumulador + elemento.precio,0);
  alert(
    "----------------------------------------------------------------------------" +
      "\n" +
      "Usted eligio adquirir todos los productos. A continuacion le mostramos como quedaria el monto con los planes de compra que tenemos disponibles :" +
      "\n" +
      "• Monto Total: $ " + total +
      "\n" +
      "➜ 20% de descuento en efectivo: $ " +
      calculaefectivo(total) +
      "\n" +
      "➜ 30% de descuento con cuenta DNI: $ " +
      calculacuentadni(total) +
      "\n" +
      "➜ 3 cuotas sin interes con cualquier tarjeta: 3x $ " +
      calculartarjeta3cuotas(total) +
      "\n" +
      "➜ 6 cuotas: 6x $ " +
      calculartarjeta6cuotas(total) +
      "\n" +
      "----------------------------------------------------------------------------"
  );
} else if (!isNaN(opcion)){
  const nuevoArray = productArray.filter((productosBuscados) => productosBuscados.precio <= opcion);
  alert("Usted puede adquirir alguno/s de los siguientes productos: \n");
  for (let j = 0; j < nuevoArray.length; j++){
    alert("✔ " + nuevoArray[j].nombre + ": $ " + nuevoArray[j].precio +"\n")
  };
}
else{
  const buscado = productArray.find(productoBuscado => productoBuscado.nombre == opcion)
  alert(
    "----------------------------------------------------------------------------" +
      "\n" +
      "Usted eligio adquirir el producto "+buscado.nombre+ ". A continuacion le mostramos como quedaria el monto con los planes de compra que tenemos disponibles :" +
      "\n" +
      "• Monto Total: $ " +
      (buscado.precio) +
      "\n" +
      "➜ 20% de descuento en efectivo: $ " +
      calculaefectivo(buscado.precio) +
      "\n" +
      "➜ 30% de descuento con cuenta DNI: $ " +
      calculacuentadni(buscado.precio) +
      "\n" +
      "➜ 3 cuotas sin interes con cualquier tarjeta: 3x $ " +
      calculartarjeta3cuotas(buscado.precio) +
      "\n" +
      "➜ 6 cuotas: 6x $ " +
      calculartarjeta6cuotas(buscado.precio) +
      "\n" +
      "----------------------------------------------------------------------------"
  );
}


function agregarProduc(indice){
  let nomProducto = prompt("Ingrese el nombre del " +indice+ "° producto");
while (nomProducto == "" || !isNaN(nomProducto)) {
  nomProducto = prompt("Ingrese el nombre del " +indice+ "° producto");
}
let preProducto = parseInt(
  prompt("Ingrese el precio del " +indice+ "° producto")
);
while (preProducto == "" || preProducto == 0 || isNaN(preProducto)) {
  preProducto = parseInt(prompt("Ingrese el precio del " +indice+ "° producto"));
}
const productoNue = new product ( nomProducto,preProducto);
productArray.push(productoNue);
}

function mostrarProductos(){
  for (let i = 0; i < (indice-1); i++){
  alert ("✔ " + productArray[i].nombre + ": $ " +productArray[i].precio +"\n")
};
}

function calculaefectivo(monto) {
  return monto * 0.8;
}

function calculacuentadni(monto) {
  return monto * 0.7;
}

function calculartarjeta3cuotas(monto) {
  return monto / 3;
}

function calculartarjeta6cuotas(monto) {
  monto = monto + monto * 0.483;
  return monto / 6;
}

}


iniciar();
