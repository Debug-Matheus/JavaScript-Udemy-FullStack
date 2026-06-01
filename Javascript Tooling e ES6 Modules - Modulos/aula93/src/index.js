//linha 1
//linha 2
//linha 3
console.log('EIIIIIIIIIIIIIIIIIIIIII');
const produtos = [
    {nome: 'Teclado', preco:200},
    {nome: 'Mouse', preco:100}
]
const produtosComDescontos = produtos.map(prod =>{
    prod.preco = prod.preco * 0.9
})
console.log(produtos);
