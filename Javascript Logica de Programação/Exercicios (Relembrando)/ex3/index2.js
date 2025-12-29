function parserIdade(valor){
    const idade = Number(valor)
    if(isNaN(idade)){
       throw new Error('Idade invalida')  
    }
    return idade
}
try{
    console.log(parserIdade('a'), '| Idade Ok')
}catch(err){
    console.log('Erro:' + err.message)
}finally{
    console.log('Finalizado')
}