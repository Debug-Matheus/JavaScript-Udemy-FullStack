//Atribuição via desestruturação de objeto e array

function funcao([nome, sobrenome, idade]){
    console.log(nome,sobrenome,idade)
}

const dados = ['Matheus', 'vasconcelos', 25]
funcao(dados)