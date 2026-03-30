
class Carro{
    #velocidade = 0
    constructor(nome){
        this.nome = nome
        
    }
    get velocidade(){
        return this.#velocidade
    }
    set velocidade(valor){
        if(typeof valor !== 'number')return
        if(valor >= 100 || valor < 0)return console.log('Velocidade fora do normal: ' + valor + 'km/h')
        this.#velocidade = valor
    }
    acelerar(){
        if(this.#velocidade >=100 )return
        this.#velocidade++
    }
    freiar(){
        if(this.#velocidade < 0)return
        this.#velocidade--
    }

}
const carro1 = new Carro('Gol')


//Acessando a chave privada
//SyntaxError: Private field '#velocidade'
// console.log(carro1.#velocidade)
carro1.velocidade = 99
carro1.velocidade = 101
//A chave fica vazia e consequentemente os valores também
console.log(Object.keys(carro1))
console.log(Object.getOwnPropertyNames(carro1))
console.log(Object.getOwnPropertySymbols(carro1))
carro1['#velocidade'] = 999
console.log(carro1.velocidade)