
function antes(callback){
    console.log('Antes')
    callback()
}
function depois(){
    setTimeout(function(){
        console.log('depois')
    },3000)
    console.log('Executei')
}
antes(depois)