function etapaIniciar(callback){
    console.log('Login iniciado')
    callback()
}
function etapaValidar(callback){
    setTimeout(()=>{
        console.log('Login Validado')
        callback()
    },1500)
}
function etapaCarregado(){
    setTimeout(()=>{
        console.log('Dashboard carregado')
    },1000)
}
function validar(){
    etapaValidar(load)
}
function load(){
    etapaCarregado()
}
etapaIniciar(validar)