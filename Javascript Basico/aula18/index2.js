function criarPessoa (nome,sobrenome,idade){
    return{
        nome,sobrenome,idade
    }
}
const pessoa1 = criarPessoa('Matheus', 'Vasconcelos', 25)
const pessoa2 = criarPessoa('Luiza', 'Catarina', 45)
const pessoa3 = criarPessoa('Paulo', 'Ricardo', 45)
const pessoa4 = criarPessoa('Guilherme', 'Silva', 45)
const pessoa5 = criarPessoa('Lorena', 'Barbosa', 45)
console.log(`${pessoa1.nome}, ${pessoa2.nome}, ${pessoa3.nome}`)
