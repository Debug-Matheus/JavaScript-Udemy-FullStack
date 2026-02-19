//Quando usar o Object.setPrototypeOf

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
    
}
const p1 = {
    nome: 'Caneta',
    preco: 1.8
}

Object.setPrototypeOf(p1, Produto.prototype)
console.log(p1)