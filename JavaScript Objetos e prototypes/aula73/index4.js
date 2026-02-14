//...Object.assign()
const produto = {nome: 'Caneca', preco: 1.8}
const produto2 = Object.assign({}, produto, {material: 'porcelana'}, {quantidade: 5})
produto2.nome = 'Lapis'
console.log(produto)
console.log(produto2)