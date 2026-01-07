function etapaA(callback){
    console.log('A')
    callback()
}
function etapaB(callback){
    setTimeout(()=>{
        console.log('B')
        callback()
    },1000)
}
function etapaC(){
    console.log('C')
}
function B(){
    etapaB(C)
}
function C(){
    etapaC()
}
etapaA(B)