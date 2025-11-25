function retornarHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

const timer = setInterval(function(){
    console.log(retornarHora())
},1000)

setTimeout(function(){
    clearInterval(timer)
},10000)

setTimeout(function(){
    console.log('Olá mundo')
},10000)