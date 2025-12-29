//Extraia nome, preco e estoque.
//estoque não existe, então o valor padrão deve ser 100.

const produto = {
    nome: "Monitor",
    preco: 800
};

const {nome,preco,estoque = 100} = produto

console.log(nome,preco, estoque)
console.log(produto)