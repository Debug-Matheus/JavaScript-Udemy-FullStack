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
        console.log(this)
    }
    static falaOi(){
        console.log('Oi')
    }
}
const tv = new ControleRemoto('Sony')
tv.aumentar()
tv.aumentar()
console.log(tv)
ControleRemoto.soma()
