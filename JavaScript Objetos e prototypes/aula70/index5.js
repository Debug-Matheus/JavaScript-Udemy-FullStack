const pessoa = new Object();
pessoa.nome = 'Matheus'
pessoa.sobrenome = 'Vasconcelos'
pessoa.idade = 38
pessoa.falaNome = function(){
    return `${this.nome} está falando!`
}
pessoa.getIDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa.getIDataNascimento())