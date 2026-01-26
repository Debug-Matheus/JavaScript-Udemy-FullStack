//Metodo SPLICE 
//               -5       -4       -3         -2        -1     
//                0        1        2          3         4     
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2, elem3)
//pop

const removidos = nomes.splice(3, 2 , 'Luiz', 'Marcela', 'Pedro')
console.log(nomes)
console.log(removidos)