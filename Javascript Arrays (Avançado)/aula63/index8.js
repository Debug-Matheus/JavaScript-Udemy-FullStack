//Metodo SPLICE 
//               -5       -4       -3         -2        -1     
//                0        1        2          3         4     
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2, elem3)

//Push
nomes.splice(nomes.length, 0, 'Matheus', 'Sara')

//Unshift:
nomes.splice(0, 0, 'Pedro', 'Lucia')

console.log(nomes)
