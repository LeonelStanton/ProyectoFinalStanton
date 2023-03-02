
let nomPriProducto= prompt("Ingrese el nombre del primer producto");
while ((nomPriProducto=="") || (!isNaN(nomPriProducto))){
    nomPriProducto= prompt("Ingrese el nombre del primer producto");
}

let prePriProducto= parseFloat(prompt("Ingrese el precio del primer producto"));
while ((prePriProducto=="") || (prePriProducto==0) || (isNaN(prePriProducto)) ){
    prePriProducto= parseFloat(prompt("Ingrese el precio del primer producto"));
}

let nomSegProducto= prompt("Ingrese el nombre del segundo producto");
while ((nomSegProducto=="") || (!isNaN(nomSegProducto))){
    nomSegProducto= prompt("Ingrese el nombre del segundo producto");
}

let preSegProducto=parseFloat(prompt("Ingrese el precio del segundo producto"));
while ((preSegProducto=="") || (preSegProducto==0) || (isNaN(preSegProducto))){
    preSegProducto=parseFloat(prompt("Ingrese el precio del segundo producto"));
}


let opcion = parseInt(prompt("----------------------------------------------------------------------------" + "\n" +
"Usted selecciono los siguientes productos :" + "\n" +
"✔" + nomPriProducto + ": $ " + prePriProducto + "\n" +
"✔" + nomSegProducto + ": $ " + preSegProducto + "\n" +
"\n" + "Ahora por favor elija una de las siguientes opciones :" + "\n" +
"(1) Comprar solo el primer producto" + "\n" +
"(2) Comprar solo el segundo producto" + "\n" +
"(3) Comprar ambos" + "\n"
+ "----------------------------------------------------------------------------"));

while ((opcion!=1) && (opcion!=2) && (opcion!=3)){
    opcion= parseInt(prompt("----------------------------------------------------------------------------" + "\n" +
    "Por favor ingrese una opcion correcta:" + "\n" +
    "(1) Comprar solo el primer producto" + "\n" +
    "(2) Comprar solo el segundo producto" + "\n" +
    "(3) Comprar ambos" + "\n" + 
    "----------------------------------------------------------------------------"));
}


function calculaefectivo(monto){
    return(monto*0.8);
}

function calculacuentadni(monto){
 return (monto*0.7);
}

function calculartarjeta3cuotas (monto){
     return (monto/3);
}

function calculartarjeta6cuotas (monto){
    monto= (monto + (monto*0.483));
    return (monto/6);
}

if (opcion==1){  
    alert("----------------------------------------------------------------------------" + "\n" +
    "Usted eligio adquirir solo el primer producto. A continuacion le mostramos como quedaria el monto con los planes de compra que tenemos disponibles :" + "\n" +
    "• Monto Total: $ " + prePriProducto + "\n"+
    "➜ 20% de descuento en efectivo: $ " + calculaefectivo(prePriProducto) + "\n"+
    "➜ 30% de descuento con cuenta DNI: $ " + calculacuentadni(prePriProducto) + "\n"+
    "➜ 3 cuotas sin interes con cualquier tarjeta: 3x $ " + calculartarjeta3cuotas(prePriProducto) + "\n"+
    "➜ 6 cuotas: 6x $ " + calculartarjeta6cuotas(prePriProducto) + "\n" + "----------------------------------------------------------------------------");
}
else if (opcion==2){
    alert("----------------------------------------------------------------------------" + "\n" +
    "Usted eligio adquirir solo el segundo producto. A continuacion le mostramos como quedaria el monto con los planes de compra que tenemos disponibles :" + "\n" +
    "• Monto Total: $ " + preSegProducto + "\n"+
    "➜ 20% de descuento en efectivo: $ " + calculaefectivo(preSegProducto) + "\n"+
    "➜ 30% de descuento con cuenta DNI: $ " + calculacuentadni(preSegProducto) + "\n"+
    "➜ 3 cuotas sin interes con cualquier tarjeta: 3x $ " + calculartarjeta3cuotas(preSegProducto) + "\n"+
    "➜ 6 cuotas: 6x $ " + calculartarjeta6cuotas(preSegProducto) + "\n" + "----------------------------------------------------------------------------");
}
else {
    alert("----------------------------------------------------------------------------" + "\n" +
    "Usted eligio adquirir ambos productos. A continuacion le mostramos como quedaria el monto con los planes de compra que tenemos disponibles :" + "\n" +
    "• Monto Total: $ " + (prePriProducto+preSegProducto) + "\n"+
    "➜ 20% de descuento en efectivo: $ " + calculaefectivo(preSegProducto+prePriProducto) + "\n"+
    "➜ 30% de descuento con cuenta DNI: $ " + calculacuentadni(preSegProducto+prePriProducto) + "\n"+
    "➜ 3 cuotas sin interes con cualquier tarjeta: 3x $ " + calculartarjeta3cuotas(preSegProducto+prePriProducto) + "\n"+
    "➜ 6 cuotas: 6x $ " + calculartarjeta6cuotas(preSegProducto+prePriProducto) + "\n" + "----------------------------------------------------------------------------");
}

