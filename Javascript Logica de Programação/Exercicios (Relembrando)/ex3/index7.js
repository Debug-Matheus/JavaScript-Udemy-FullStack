function pegarDados(){
    const pessoa = {nome: '', idade: 5}
    return pessoa
}
function validarDados(dados){
    if(dados.nome.trim() === '' || dados.idade < 0){
        throw new Error('Nome vazio ou idade menor que 0')
    }
    return dados
}
function salvarDados(){
    const salvo = 'Salvo!'
    return salvo
}
function processar(){
    
    try {
        const dados = pegarDados()
        const dadosValidados = validarDados(dados)
        const resultado = salvarDados()

        console.log(dadosValidados)
        console.log(resultado)
    } catch (error) {
        console.log(error.message)
    }finally{
        console.log('Processo encerrado')
    }
}
processar()