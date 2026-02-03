// Factory function / Constructor function / Classes -> padrões de projetos
//NEW: criar um novo objeto e atrelar o this da função ao objeto
function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`
    }
    Object.freeze(this) //Travando o this aos primeiros valores passados
}
const p1 = new Pessoa('Matheus', 'Vasconcelos')
p1.nome = 'Lucas' 
delete p1.nome //Não deletou por causa que o this está travado
const p2 = new Pessoa('Luiz', 'Otavio')
console.log(p1) // Function Pessoa é um construtor do objeto

