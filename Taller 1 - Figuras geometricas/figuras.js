//Codigo del Cuadrado

console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


function perimetroCuadrado (lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
   return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();



//Codigo del Triangulo

console.group("Triangulo")

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.");

const areaTriangulo = ((baseTriangulo * alturaTriangulo)/2);
console.log("El area del triangulo es: " + areaTriangulo + " cm^2.");
*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return ((base * altura))/2;
}

function alturaTriangulo(lado1, lado2, lado3){
    if (lado1 === lado2 && lado1 != lado3){
        const anuncio = 'Es un triangulo isoceles'
        const altura =  Math.sqrt((lado1**2) - (lado3/2)**2)
        alert (anuncio + ' y su altura es ' + altura)
    }
    else {
        alert ("no es un traingulo isoceles");
    }
}

console.groupEnd();



//Codigo del Circulo

console.group("Circulo")

/*
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm.");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm.");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm.");

// Area
areaCirculo = ((radioCirculo * radioCirculo) * PI);
console.log("El area del circulo es: " + areaCirculo + " cm^2.");
*/

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return ((radio * radio) * Math.PI);
}

console.groupEnd();


//Interaccion con HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo 

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLadoA");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputLadoB");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("inputBase");
    const value3 = Number(input3.value);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputBase");
    const value1 = input3.value;

    const input4 = document.getElementById("inputAltura");
    const value2 = input4.value;
    
    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("inputLadoA");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputLadoB");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("inputBase");
    const value3 = Number(input3.value);

    const altura = alturaTriangulo(value1,value2, value3);
}


//Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}

