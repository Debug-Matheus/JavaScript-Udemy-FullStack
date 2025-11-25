function retornarHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

const timer = setInterval(function(){
    console.log(retornarHora())
},1000)