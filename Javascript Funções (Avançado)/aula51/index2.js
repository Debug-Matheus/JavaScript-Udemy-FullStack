function criarPessoa(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
}
const p1 = criarPessoa('Matheus', 'Vasconcelos')
const p2 = {
    nome: 'Lucas',
    sobrenome: 'Pato'
}
console.log(p1)
console.log(p2)