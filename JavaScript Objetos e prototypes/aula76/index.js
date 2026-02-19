// Produto  -> aumento, desconto
// Camisa = Cor, caneca = material

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia   
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}
function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

// Object.setPrototypeOf(Camiseta.prototype,Produto.prototype)

const camiseta = new Camiseta('Regata', 70, 'Preto')
camiseta.desconto(10)
console.log(camiseta)


const lapis = new Produto('Lapis', 10)
lapis.aumento(10)
console.log(lapis)