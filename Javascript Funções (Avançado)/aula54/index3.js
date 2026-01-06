function inicio(callback){
    console.log('Inicio')
    callback()
}
function meio(callback){
    setTimeout(function(){
        console.log('Meio')
    },1000)
    callback()
}
function fim(){
    setTimeout(function(){
        console.log('Fim')
    },1000)

}
function iniciarMeio(){
    meio(finalizar)
}
function finalizar(){
    fim()
}
inicio(iniciarMeio)
