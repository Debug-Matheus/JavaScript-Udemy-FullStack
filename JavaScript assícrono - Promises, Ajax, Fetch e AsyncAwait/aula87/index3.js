function rand(min,max){
    min*= 1000;
    max*= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject('BAD VALUE')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise')
        },tempo)
    })
}

const promises = [
    esperaAi('Conexão com o BD',rand(1,3)),
    esperaAi('Buscando dados da Base',rand(1,3)),
    esperaAi('Tratando dados da Base',rand(1,3)),
    esperaAi('Exibe dados na tela',rand(1,3)),
    esperaAi(1112,rand(1,3))
];
//A primeira promise a ser resolvida, será exibida
Promise.race(promises)
    .then((valor=>{
        console.log(valor)
        
    }))
    .catch((error=>{
        console.log(error)
    }))