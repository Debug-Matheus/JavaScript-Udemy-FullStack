//Atribuição via desestruturação (Objeto)
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Vasconcelos',
    endereço: {
        rua:' Rua J',
        numero: 15
    }
}

// const {nome : teste, sobrenome, endereço: {rua, numero}} = pessoa
// console.log(teste, sobrenome, rua, numero)
// const {nome : teste = 'Luiz', sobrenome} = pessoa

// console.log(teste, sobrenome)

const{endereço: {rua: r = 'Rua alves', numero}} = pessoa
console.log(r, numero)