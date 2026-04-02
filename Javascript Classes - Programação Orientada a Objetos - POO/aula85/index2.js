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

const resultado = ControleRemoto.soma(2,8)
console.log(resultado)

function total(valor){
    return valor
}
const mesmoResultado = total(ControleRemoto.soma(2,8))
console.log(mesmoResultado)