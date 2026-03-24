//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    2
]
const nomePessoa = pessoas.map((valor)=>{
    return valor.nome
})
const semChaveNome = pessoas.map((valor) =>{
    const novoNome = {...valor}
    delete novoNome.nome
    return novoNome
})
const addId = pessoas.map((valor,indice)=>{
    const novoId = {...valor}
    novoId.id = indice + 1
    return novoId
})
console.log(nomePessoa)
console.log(semChaveNome)
console.log(addId)
console.log(pessoas)

