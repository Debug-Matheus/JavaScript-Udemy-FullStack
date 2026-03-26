const _velocidade = Symbol('velocidade')
const _idade = Symbol('idade')
class Carro{
    constructor(nome,idade){
        this.nome = nome
        this[_velocidade] = 0
        this[_idade] = idade
    }
    get velocidade(){
        return this[_velocidade]
    }
    get idade(){
        return this[_idade]
    }
    
    acelerar(){
        if(this[_velocidade] >=100 )return
        this[_velocidade]++
    }
    freiar(){
        if(this[_velocidade] <= 0)return
        this[_velocidade]--
    }

}
const carro1 = new Carro('Gol',18)
carro1.freiar()

console.log(carro1)

for(let i = 0; i <= 100; i++){
    carro1.acelerar()
}
carro1.idade = 50
carro1.velocidade = 1500
console.log(carro1)