//Map

//Dobre os numeros
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]


const numerosDobrados = numeros.map((function (valor,indice, array){
    // console.log(valor)
    // console.log(indice)
    // console.log(array)
    return valor * 2
}))
console.log(numerosDobrados)
console.log(numeros)