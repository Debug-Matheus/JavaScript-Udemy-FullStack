// Exercico: Escrever uma função que recebe 2 número e retorna o maior dele

const maiorNumero = (num1, num2)=> num1 > num2 ? num1 : num2

let n1 = 7
let n2 = 8
const numero = maiorNumero(n1,n2)
console.log(`Maior numero entre ${n1} e ${n2} é: ${numero}`)