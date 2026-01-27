// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const maiorQueCinco = pessoas.filter((valor) =>{
    return valor.nome.length >= 5
})
const maisDeCinquenta = pessoas.filter((valor) =>{
    return valor.idade > 50
})
const terminaComA = pessoas.filter((valor) =>{
    return valor.nome.toLocaleLowerCase().endsWith('a')
})
console.log(maiorQueCinco)
console.log(maisDeCinquenta)
console.log(terminaComA)