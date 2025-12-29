function retornaHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

const timer = setInterval(function(){
    console.log(retornaHora())
},1000)

setTimeout(function(){
    clearInterval(timer)
},10000)

setTimeout(function(){
    console.log('Ola mundo')
},10000)
