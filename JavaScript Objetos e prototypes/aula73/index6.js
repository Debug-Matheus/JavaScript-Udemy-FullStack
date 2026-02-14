//Object.getOwnPropertyDescriptor(objeto,'chave do objeto')
const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome',{
    enumerable: true,
    writable: false,
    configurable: true,
})
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
produto.nome = 'Lapis'
console.log(produto)