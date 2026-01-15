//Função construtora -> objetos
//Funlçao fabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){

    //Atributos ou metodos privados
    const id = 123;
    const idade = function(){
        
    }
    
    //Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Matheus', 'Vasconcelos')
const p2 = new Pessoa('Maria', 'Lucia')
console.log(p1.nome)
p1.metodo()