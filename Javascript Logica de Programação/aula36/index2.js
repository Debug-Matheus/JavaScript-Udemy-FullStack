//FOR IN -> lê os indices ou chaves do objeto
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Otavio',
    idade: 25
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}