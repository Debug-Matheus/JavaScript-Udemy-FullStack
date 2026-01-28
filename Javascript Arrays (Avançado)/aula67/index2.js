//Reduce

//Some todos os numeros (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)


//O acumulador caso não defina como 0, será o primeiro valor do array. 
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,77]
const  total = numeros.reduce(function(acumulador, valor, indice, array){

    if(valor % 2 ===0){
        acumulador.push(valor)
    }
    return acumulador
},[])
console.log(total)