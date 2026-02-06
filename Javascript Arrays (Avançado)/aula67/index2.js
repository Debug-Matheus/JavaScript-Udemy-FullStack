//Reduce

//Retorne um array com os pares (filter)

//O acumulador caso não defina como 0, será o primeiro valor do array. 
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]
const  total = numeros.reduce(function(acumulador, valor, indice, array){

    if(valor % 2 ===0){
        acumulador.push(valor)
    }
    return acumulador
},[])
console.log(total)