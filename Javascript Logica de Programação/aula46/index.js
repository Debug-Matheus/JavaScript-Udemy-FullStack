function retornaHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

function funcaoDOInterval(){
    console.log(retornaHora())
}

setInterval(funcaoDOInterval,1000)