class DispositivoEletronico{
    constructor (nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
            
    }
    desligar(){
        if(this.ligado === false) {
            console.log(this.nome + ' já está desligado')
            return
        }
        this.ligado = false
    }
}
const d1 = new DispositivoEletronico('Televisão')
d1.ligar()
console.log(d1)
d1.ligar()
d1.desligar()
console.log(d1)
d1.desligar()