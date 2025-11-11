const verdadeiro = true

// Let tem escopo de bloco
// Var só tem escopo de função
let nome = 'Luiz';
var nome2 = 'Luiz'

if(verdadeiro){
    let nome = 'Otavio'
    // console.log(nome, nome2)

    if(verdadeiro){
        var nome2 = 'Matheus'
    }

}
console.log(nome, nome2)