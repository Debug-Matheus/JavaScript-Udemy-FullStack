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
class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,peso,modelo){
        super(nome)
        this.cor = cor
        this.peso = peso
        this.modelo = modelo
    }
}
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }
    ligar() {
        console.log('Troquei o metodo ligar')
    }
    falaOi() {
        console.log('Oi')
    }
}
const d1 = new Smartphone('Iphone','Azul',800, 17)
console.log(d1)

const d2 = new Tablet('Ipad',true)
console.log(d2)
console.log('Ligado: ' + d2.ligado)
d2.ligar()
d2.falaOi()
console.log(d2)

