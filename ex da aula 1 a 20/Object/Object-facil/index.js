
const pessoa = {
    nome: 'Matheus',
    idade: 24,
    estado: 'Pernambuco'
}
console.log(pessoa.nome)

//adicionei uma nova propriedade
pessoa.profissao = 'Programador'
console.log(pessoa)

//mudando idade
pessoa.idade = 25;

//deletando propriedade
delete pessoa.estado

console.log(pessoa)