//ESCOPO LÉXICO
const nome = 'Matheus'

function falaNome(){
    const nome = 'Otavio'
    console.log(nome)
}
function usaFalaNome(){
    falaNome()
}
usaFalaNome()