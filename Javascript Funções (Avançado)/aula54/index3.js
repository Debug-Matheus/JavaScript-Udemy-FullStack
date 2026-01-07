function inicio(callback){
    console.log('Inicio')
    if(typeof callback ==='function'){
        callback()
    }
}
function meio(callback){
    setTimeout(function(){
        console.log('Meio')
        callback?.()
    },1000)
    
}
function fim(callback){
    setTimeout(function(){
        console.log('Fim')
        callback?.()
    },1000)

}
function iniciarMeio(){
    meio(finalizar)
}
function finalizar(){
    fim()
}
inicio(iniciarMeio)
