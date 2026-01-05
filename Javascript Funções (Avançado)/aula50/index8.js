//Parametro da função
//atribuição via desestruturação com objeto e função
function funcao({nome, sobrenome, idade}){
   console.log(nome,sobrenome,idade)
}
let obj = {nome: 'Ana', sobrenome: 'Lima', idade: 25}
funcao(obj)

