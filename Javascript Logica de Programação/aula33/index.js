//Atribuição via desestruturação (Objeto)
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Vasconcelos',
    endereço: {
        rua:' Rua J',
        numero: 15
    }
}

const {nome : teste, sobrenome, endereço: {rua, numero}} = pessoa
console.log(teste, sobrenome, rua, numero)