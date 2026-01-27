//Filter

//Retorne os numeros maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]

function callbackFilter(valor, indice, array){
    return valor > 10
}
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)
