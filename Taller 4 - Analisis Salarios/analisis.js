//Helpers

function esPar(numero){
    return (numero % 2 ===0);
 };
 
 function calcularMediaAritmetica(lista){
     const sumaLista = lista.reduce(
         function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
         }
     );
 
     const promedioLista = sumaLista / lista.length;
     
     return promedioLista;
 }

//Calculadora de Medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const mediana1 = lista[mitad -1];
        const mediana2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([mediana1, mediana2]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    };
}

//Mediana General

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana Top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
