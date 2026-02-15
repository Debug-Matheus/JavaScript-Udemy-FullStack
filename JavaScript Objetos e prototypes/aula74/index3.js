function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `Original: ${this.nome} ${this.sobrenome}`
    }
    
}

// Pessoa.prototype === p1.__proto__ -> true

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}
const p1 = new Pessoa('Matheus', 'Vasconcelos')

console.dir(p1)