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
p1.nome = 'Lucas' // Esse valor que assume porque foi passado por referência mesmo sendo uma constante
const p2 = new Pessoa('Luiz', 'Otavio')
console.log(p1) // Function Pessoa é um construtor do objeto

