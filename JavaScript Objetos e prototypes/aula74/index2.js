function Pessoa(nome){
    this.nome = nome
}
Pessoa.prototype.falaOi = function(){
    return `Seja bem vindo ${this.nome}`
}

const p1 = new Pessoa('Matheus')
console.dir(p1.falaOi())