// Primitivos (imutáveis) - String, number, boolean, null, undefined (symbol, bigint)

//          0123456
let nome = 'Matheus'
nome[0] = 'L'
// console.log(nome[0])

let a = 'A'
let b = a
a = 'Alberto'
console.log(a, b)