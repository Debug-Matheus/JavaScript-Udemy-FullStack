const pessoa = {
    nome: 15,
    idade: 25
}

function getNome(pessoa){
    if(pessoa.nome !== 'string' || pessoa.nome.trim()===''){
        throw new Error('Nome invalido ou não existe nome')
    }else{
        return pessoa.nome.toUpperCase()
    }
}

try{
    console.log(getNome(pessoa))
}catch(err){
    console.log(err.message)
}