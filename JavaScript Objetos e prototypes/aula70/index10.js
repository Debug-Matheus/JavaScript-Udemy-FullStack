// Factory function / Constructor function / Classes -> padrões de projetos
//NEW: criar um novo objeto e atrelar o this da função ao objeto
function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`
    }
}
const p1 = new Pessoa('Matheus', 'Vasconcelos')
Object.freeze(p1) //Travando objeto ao primeiro valor passado
p1.nome = 'Lucas' 
const p2 = new Pessoa('Luiz', 'Otavio')
console.log(p1) // Function Pessoa é um construtor do objeto

