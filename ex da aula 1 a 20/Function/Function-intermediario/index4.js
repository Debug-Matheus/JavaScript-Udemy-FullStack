function nomeSubstituir (nome){
    return nome.replace(/[aeiou]/gi, '*')
}
let nomeNovo = nomeSubstituir('Matheus Vasconcelos')
console.log(nomeNovo)


