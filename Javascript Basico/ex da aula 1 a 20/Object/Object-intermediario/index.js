// let carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2022   
// }
// carro.info = function(){
//     console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
// }
// carro.info();

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,

    info(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
}
carro.info()