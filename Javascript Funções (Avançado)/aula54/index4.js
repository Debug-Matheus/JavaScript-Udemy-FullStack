function conectar(callback){
    console.log('Conectando...')
    callback()
}
function autenticar(callback){
    setTimeout(function(){
        console.log('Autenticando...')
        callback() 
    },2000)
    
}

function carregar(){
    setTimeout(function(){
        console.log('Dados carregados')
    },1000)
}
conectar(conectarAut)
function conectarAut(){
    autenticar(carregando)
}
function carregando(){
    carregar()
}


