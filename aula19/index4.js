//Referência (mutável) - array, object, function -> Tornando Independente
//Usando Objeto
const a = {
    nome: 'Paulo',
    idade: 25
}
const b = {...a}
a.nome = 'Leandro'
console.log (a)
console.log(b)