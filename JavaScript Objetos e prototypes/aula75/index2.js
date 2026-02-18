function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.semDesconto = function(){
    return this.nome +': ' + this.preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = (this.preco - (this.preco * (percentual / 100)))
    return this.nome +': ' + this.preco
}
Produto.prototype.aumento = function(percentual){
    this.preco = (this.preco + (this.preco * (percentual / 100)))
    return this.nome +': ' + this.preco
}

const p1 = new Produto('Caneta', 2)
const p2 = {
    nome: 'Lapis',
    preco: 3
}
Object.setPrototypeOf(p2, Produto.prototype)

console.log(p1)
console.log(p1.semDesconto())
p1.desconto(10)
console.log(p1.semDesconto())
console.log(p1)
console.log('======================================')

console.log(p2)
console.log(p2.semDesconto())
p2.desconto(10)
console.log(p2.semDesconto())
console.log(p2)
