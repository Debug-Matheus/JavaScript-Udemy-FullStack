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

const promises = [
    'Primeiro Valor',
    esperaAi('Conexão com o BD',rand(1,3)),
    esperaAi('Buscando dados da Base',rand(1,3)),
    esperaAi('Tratando dados da Base',rand(1,3)),
    esperaAi(123,rand(1,3)),
    'Outro Valor'
];
//Todas as promises dentro do array, serão executadas exceto se estourar no reject
Promise.all(promises)
    .then((valor=>{
        console.log(valor)
        // console.log(valor[1],`\n${valor[2]}` )
        // console.log(valor[3])
    }))
    .catch((error=>{
        console.log(error)
    }))