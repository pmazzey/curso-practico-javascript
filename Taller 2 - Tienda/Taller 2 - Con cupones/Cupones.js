/*
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;


console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})
*/

function cacularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [ 
    "cupon#1",
    "cupon#2",
    "cupon#3",
];

function onClickPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCupon= document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue) {
        case "cupon#1":
            descuento = 15;
        break;
        case "cupon#2":
            descuento = 30;
        break;
        case "cupon#3":
            descuento = 25;
        break;
    }

    const precioConDescuento = cacularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}