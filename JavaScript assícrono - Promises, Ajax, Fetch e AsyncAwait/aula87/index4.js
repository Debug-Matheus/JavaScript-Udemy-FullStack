function rand(min,max){
    min*= 1000;
    max*= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        
        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na Promise')
        },tempo)
    })
}
function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina em cache')
    }else{
        // return esperaAi(123, 3000) -> Estourar no reject da função esperaAi
        return esperaAi('Baixando a pagina', 3000) //Entrar no resolve da promise da função espera ai
    }
}

baixaPagina()
    .then((dadosPagina=>{
        console.log(dadosPagina)
    }))
    .catch((e=>{
        console.log('ERROR:', e)
    }))