//Getters e Setters com factory function

function criarProduto(nome){
    return{
        get nome(){
            return nome
        },
       
    } set nome(valor){
            valor = valor.split(' ')
            nome = valor.shift()
        }
}
const p2 = criarProduto('Matheus Vasconcelos')
p2.nome = 'Maria Clara'
console.log(p2.nome)