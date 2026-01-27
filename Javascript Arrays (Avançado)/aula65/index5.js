//Filter

//Retorne os numeros maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]


const numerosFiltrados = numeros.map((valor,indice, array)=>{
    // console.log(valor)
    // console.log(indice)
    // console.log(array)
    return valor %2 === 0
})
console.log(numerosFiltrados)
