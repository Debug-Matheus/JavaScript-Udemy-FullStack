// Factory function / Constructor function / Classes -> padrões de projetos

function criaPessoa(nome,sobrenome){
    return{
        nome:nome,
        sobrenome:sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
        // nomeCompleto(){
        //     return `${this.nome} ${this.sobrenome}`
        // }
    }
}
const p1 = criaPessoa('Matheus', 'Vasconcelos')
console.log(p1.nomeCompleto)

