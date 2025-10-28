const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Vasconcelos',
    idade: 15,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        // console.log('Ola Mundo')
    },
    minhaIdade(){
        console.log(`A minha idade atual é: ${this.idade}`)
    },
    incrementaIdade (){
        this.idade++
    }
}
pessoa1.fala()
pessoa1.minhaIdade()
pessoa1.incrementaIdade()
pessoa1.minhaIdade()