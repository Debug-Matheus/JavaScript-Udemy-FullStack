const _velocidade = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }
    get velocidade(){
        return this[_velocidade]
    }
    set velocidade(valor){
        if(typeof valor !== 'number')return
        if(valor >= 100 || valor < 0)return console.log('Velocidade fora do normal: ' + valor + 'km/h')
        this[_velocidade] = valor
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
carro1.freiar()

console.log(carro1)

for(let i = 0; i <= 50; i++){
    carro1.acelerar()
}
carro1.velocidade = 99
console.log(carro1.nome)
console.log(carro1.velocidade)
console.log(carro1)