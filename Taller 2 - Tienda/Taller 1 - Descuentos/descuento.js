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

function onClickPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = cacularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}