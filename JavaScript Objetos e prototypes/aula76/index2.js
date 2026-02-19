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
Camiseta.prototype.desconto = function(percentual){
    this.preco = (this.preco - (this.preco * (percentual / 100)))
}
function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco)
    this.material = material
    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Not a number')
                return
            }
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 70, 'Preto')

camiseta.desconto(10)
console.log(camiseta)

const caneca = new Caneca('Caneca', 10, 'Porcelana', 5)
caneca.aumento(10)
caneca.estoque = 10
console.log(caneca)
console.log('Caneca: ' + caneca.estoque)

const lapis = new Produto('Lapis', 10)
lapis.aumento(10)
console.log(lapis)

