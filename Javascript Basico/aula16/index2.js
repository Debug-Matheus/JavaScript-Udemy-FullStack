//ARRAYS

//          0123456
let nome = 'Matheus'

//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']


alunos[1] = 'Leonardo' //Substitui pelo nome da Maria
alunos[3] = 'Luiza' // Acrescenta um indice 3 com valor 'Luiza'
alunos.unshift('Matheus') // Adiciona na primeira posição da lista
alunos.push('Bernardo') // Adiciona na ultima posição da lista
console.log(alunos)
// alunos.pop()
//pop
let removido = [alunos.pop() , alunos.pop()]
console.log(alunos)
console.log(`Os alunos removidos foram: ${removido}`)
console.log(removido)

//shift
let removeComeco = [removido.shift()]
console.log(removeComeco)
console.log(removido)

// console.log(`Posição de Bernardo: ${removido.indexOf('Bernardo')}`)
// console.log(`Posição de Luiza: ${removido.indexOf('Luiza')}`)



// console.log(alunos)

//console.log(alunos[0]) // Mostra o valor na posição 0
//console.log(alunos[1]) // Mostra o valor na posição 1