//Map

//Dobre os numeros
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]

function callBackDobrar(valor){
    return valor * 2
}
const numerosDobrados = numeros.map((callBackDobrar))
console.log(numerosDobrados)
console.log(numeros)