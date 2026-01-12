//FACTORY FUNCTION

function criarPessoa(nome,sobrenome){
    return {
        nome:nome,
        sobrenome: sobrenome
    }
}
const p1 = criarPessoa('Luiz', 'Otavio')
console.log(p1)