//Factory functions + Prototypes
//Não é recomen
function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {
        fala(){
            console.log(this.nome + ' está falando')
        },
        comer(){
            console.log(this.nome + ' está comendo')
        },
        beber(){
            console.log(this.nome + ' está bebendo')
        }
    }
        
    return Object.create(pessoaPrototype,{
        nome:{value: nome},
        sobrenome:{value: sobrenome}
    })
        
}


const p1 = criaPessoa('Matheus', 'Vasconcelos')
const p2 = criaPessoa('Luiz', 'Otavio')
console.log(p1)
p1.fala()
console.log(p2)

