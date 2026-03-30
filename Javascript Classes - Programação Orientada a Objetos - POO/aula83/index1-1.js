const _velocidade = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }
    get velocidade(){
        return this[_velocidade]
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
const carro1 = new Carro('Gol')
carro1.velocidade = 99
console.log(carro1)

//Hackeando a chave symbol
const symbols = Object.getOwnPropertySymbols(carro1)
const chave = symbols[0]
carro1[chave] = 999
console.log(carro1)