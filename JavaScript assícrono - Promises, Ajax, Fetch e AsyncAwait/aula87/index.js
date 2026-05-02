function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        
        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return
        }
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function (erro){
        console.log(erro)
    })