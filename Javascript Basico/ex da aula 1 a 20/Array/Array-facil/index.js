//Criou um array com 5 nomes
const nome = ['Matheus', 'Lucas', 'Bernardo', 'João', 'Caio']
//Mostrou quem está na posição 3
console.log(nome[2])
//adicionou um nome no final
nome.push('Paulo')
//adicionou um nome no começo
nome.unshift('Otavio')
console.log(nome)
//mostrou a posição de joão no array
console.log(`João está na ${nome.indexOf('João')} posição`)

//Removi o ultimo nome
nome.pop()
console.log(nome)
//Exibi os 3 primeiros nomes
console.log(nome.slice(0,3))