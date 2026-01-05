//ESCOPO LÉXICO
const nome = 'Matheus'

function falaNome(){
    
    console.log(nome)
}
function usaFalaNome(){
    const nome = 'Otavio'
    falaNome()
}
usaFalaNome()