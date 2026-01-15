//FACTORY FUNCTION
function criaPessoa(nome,sobrenome,a,p){
    return{
        nome:nome,
        sobrenome:sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ') //vai fazer deixar o nome em array
            this.nome = valor.shift() // remove o primeiro nome do array
            this.sobrenome = valor.join(' ')
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura:a,
        peso:p,
        get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Luiz', 'Otavio', 1.70, 55)
const p2 = criaPessoa('Maria', 'Luzia', 1.80, 60)
p1.nomeCompleto = 'Matheus Vasconcelos da Silva'
console.log(p1.sobrenome)
console.log(p1.fala('falando oi'))