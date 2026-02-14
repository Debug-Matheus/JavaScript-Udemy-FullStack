//Object.entries()

//Usando entries no objeto
const produto = {nome: 'Produto', preco: 1.8};
console.log(Object.entries(produto))

//Usando entries com for no objeto
console.log('===========================')
for(let entry of Object.entries(produto)){
    console.log(entry)
}

//Desestruturação usando o entries com for  no objeto
console.log('===========================')
for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor)
}
