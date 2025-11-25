function retornarHora(){
    const data = new Date()

   return data.toLocaleTimeString('pt-BR')
}

setInterval(function (){
    console.log(retornarHora())
}, 1000);

