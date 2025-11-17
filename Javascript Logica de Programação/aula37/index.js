//FOR OF

// FOR Clássico geramalmente com interáveis (array ou strings) Retorna o indice ou chave e valor 
// FOR IN - Retorna o indice ou chave e valor (String, array, objetos)
// FOR OF - Retorna o valor em si (interáveis, arrya ou Strings)

const frutas = ['Melancia', 'Uva','Maçã']

for(let indice = 0; indice < frutas.length; indice++){
    console.log(indice, frutas[indice])
}

console.log('#########')

for(let indice in frutas){
    console.log(indice, frutas[indice])
}

console.log('#########')

for (let valor of frutas){
    console.log(valor)
}

console.log('#########')

frutas.forEach(function (el,indice, array){
    console.log(el,indice,array)
})