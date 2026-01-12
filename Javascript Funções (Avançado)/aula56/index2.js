//FACTORY FUNCTION
function criaPessoa(nome,sobrenome,a,p){
    return{
        nome:nome,
        sobrenome:sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura:a,
        peso:p,
        imc: function(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Luiz', 'Otavio', 1.70, 55)
console.log(p1.imc())
const p2 = criaPessoa('Maria', 'Luzia', 1.80, 60)
console.log(p1.fala(' falando oi'))
console.log(p2.fala('falando oi'))