//Crie uma função que retorna um array com três valores.
//Use desestruturação para guardar cada retorno em variáveis diferentes.
function pegaUser(){
    return ['Ana', 30, 'dev']
}
const[nome,idade,profissao] = pegaUser()
console.log(nome,idade,profissao)