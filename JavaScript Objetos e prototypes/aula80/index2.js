//Factory functions + Prototypes
//Isso não é herança, isso é composição.

const fala = {
    fala() {
        console.log(this.nome + ' está falando')
    }
}
const comer = {
    comer() {
        console.log(this.nome + ' está comendo')
    }
}
const beber = {
    beber() {
        console.log(this.nome + ' está bebendo')
    }
}
const pessoaPrototype = { ...fala }
function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })

}
const p1 = criaPessoa('Matheus', 'Vasconcelos')
const p2 = criaPessoa('Luiz', 'Otavio')
console.log(p1)
console.log(p2)
p1.fala()
console.log(p1.nome + ' ' + p1.sobrenome)

