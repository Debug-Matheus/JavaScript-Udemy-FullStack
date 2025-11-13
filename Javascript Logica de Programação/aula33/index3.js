//Atribuição via desestruturação (Objeto)
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Vasconcelos',
    endereço: {
        rua:' Rua J',
        numero: 15
    }
}

const {nome, ...resto} =pessoa
console.log(nome,resto)