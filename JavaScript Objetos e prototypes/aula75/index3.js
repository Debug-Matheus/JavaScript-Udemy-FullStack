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


const p1 = Object.create(Produto.prototype,{
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Notebook'
    }

});
const p2 = Object.create(Produto.prototype)

p1.aumento(10)
console.log(p1)

p2.nome = 'Caneta'
p2.preco = 300
p2.desconto(10)
console.log(p2)

