//Métodos de instância e estáticos
class ControleRemoto {
    constructor(tv){
        this.tv = tv 
        this.volume = 0
    }
    //Métodos de Instancias
    aumentar(){
        this.volume += 2
    }
    diminuir(){
        this.volume -=2
    }
    //Métodos de Instancias Estáticos
    static soma(x,y){
        return x + y
    }
    static falaOi(){
        console.log('Oi')
    }
}
class ControleSony extends ControleRemoto{
    constructor(tv, cor){
        super(tv)
        this.cor = cor
    }

}
function resultado(){
    return ControleSony.soma(2,3)
}
const total = resultado()
console.log(total)