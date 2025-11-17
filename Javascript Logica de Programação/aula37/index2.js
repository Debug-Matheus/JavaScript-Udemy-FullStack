//FOR OF


const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Vasconcelos',
    idade: 24
}

// for(let chave in pessoa){
//     console.log(chave, pessoa[chave])
// }

//NÃO FUNCIONA EM OBJETO!!
for(let chave of pessoa){
    console.log(chave)
}

// for (let chave = 0; chave < pessoa.length; chave++){
//     console.log(pessoa[chave])
// }