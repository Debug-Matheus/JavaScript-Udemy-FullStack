//Atribuição via desestruturação objeto
//Use desestruturação para extrair nome e cidade, mas renomeando para n e c.

const user = {
    nome:'Matheus',
    idade: 20,
    cidade:'Recife'
}

const {nome: n, cidade: c} = user

console.log(n, c)