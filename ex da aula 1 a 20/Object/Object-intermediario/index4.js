const produto = {
    nome: 'iphone',
    quantidade :5,
    preco: 2000
    
}  
    produto.aplicarDesconto = function (percentual){
        const desconto =  (this.preco * percentual) 
        return desconto
    } 
    
const precoNovoComDesconto = produto.preco - produto.aplicarDesconto(0.05)
console.log(`Preço do produto sem desconto: ${produto.preco}`)
console.log(`Preço do produto com desconto: ${precoNovoComDesconto}`)