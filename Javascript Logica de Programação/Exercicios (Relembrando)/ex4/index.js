function retornaHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}
function intervaloHora(){
    console.log(retornaHora())
}
setInterval(intervaloHora, 1000)