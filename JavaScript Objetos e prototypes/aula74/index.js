/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
- Protótipos é o termo usado para se referir ao que foi  criado pela primeira vez, servindo de modelo ou molde para futuras produções.

- Protótipos é um conceito de herança de propriedades e métodos. Um protótipo representa um conjunto de propriedades e métodos que podem ser compartilhados por objetos.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JavaScript vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até topo (null) até encontrar (ou não) tal membro.

__proto__ é o pai do objeto date que foi criado. Ele vai ser o pai de todos os objetos criados a partir da função construtora Date. Então get.fullYear e outros metodos está dentro do proto de Date.

//Pessoa.prototype: prototype é um objeto que já está linkado ao construtor Pessoa, porém não tem nada dentro dele. Ele vai ser o pai de todos os objetos criados a partir da função construtora Pessoa. 

//O prototype (protótipo) em uma função construtora no JavaScript serve principalmente para compartilhar propriedades (uma chave com uma outra) e métodos (uma função metodo chamando uma outra)entre todas as instâncias criadas por essa função, otimizando o uso de memória e implementando herança. 
OBS: Ao invés de criar uma nova cópia de uma função (método) para cada objeto instanciado, o prototype permite que todos os objetos apontem para um único local na memória para acessar esse método. 

//__proto__ é a função contrutora seguida do prototype: Pessoa.prototype
*/ 
function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = function(){
    //     return `Original ${this.nome} ${this.sobrenome}`
    // }
       
}

// Pessoa.prototype === p1.__proto__ -> true

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}
Pessoa.prototype.objetoCriado = 'Objeto criado com sucesso'
const p1 = new Pessoa('Matheus', 'Vasconcelos', 38)// <- Pessoa = Função construtora
const p2 = new Pessoa('Lucas', 'Vasconcelos', 15)
const p3 = new Pessoa('Arthur', 'Vasconcelos', 42)

const date = new Date() // <- Date = Função construtora

console.dir(p1)
console.dir(p2)
console.dir(p3)

console.dir(p2.nomeCompleto())
console.dir(p2.objetoCriado)

console.dir(date)