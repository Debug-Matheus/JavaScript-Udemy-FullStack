
class Carro{
    constructor(nome){
        this.nome = nome
        this.velocidade = 0
    }
    
    acelerar(){
        if(this.velocidade >=100 )return
        this.velocidade++
    }

    freiar(){
        if(this.velocidade <= 0)return
        this.velocidade--
    }

}
const carro1 = new Carro('Gol')
carro1.freiar()

console.log(carro1)

for(let i = 0; i <= 50; i++){
    carro1.acelerar()
}
carro1.velocidade = 1500
console.log(carro1)