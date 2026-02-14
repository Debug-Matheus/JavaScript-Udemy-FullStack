//Metodo para pegar apenas uma propriedade do objeto
const produto = {nome: 'Caneca', preco: 1.8}
const produto2 = {nome: produto.nome}
produto2.nome = 'Lapis'
console.log(produto)
console.log(produto2)