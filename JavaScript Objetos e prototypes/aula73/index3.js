//...spread
const produto = {nome: 'Caneca', preco: 1.8}
const produto2 = {
    ...produto,
    quantidade: 54

}
produto2.nome = 'Lapis'
console.log(produto)
console.log(produto2)