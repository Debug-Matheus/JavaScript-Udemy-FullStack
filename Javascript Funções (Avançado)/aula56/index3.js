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
        get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Luiz', 'Otavio', 1.70, 55)
const p2 = criaPessoa('Maria', 'Luzia', 1.80, 60)
console.log(p1.nome)
console.log(p1.imc)