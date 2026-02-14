/*
Object.value
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o,'prop')
...spread

Ja visto:
Object.keys(retorna chaves)
Object.freeze (congela o objto ou o this)
Object.defineProperties (define varias propriedades de mais de uma chave do objeto)
Object.defineProperty (define uma propriedade da chave do objeto.)
*/ 
const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = produto
produto.nome = 'Luiz otavio'
console.log(outraCoisa)
