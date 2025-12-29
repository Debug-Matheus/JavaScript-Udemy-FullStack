function retornaHora(){
    const data = new Date()

    return data.toLocaleTimeString('pt-BR')
}
setInterval(function(){
    console.log(retornaHora())
},1000)