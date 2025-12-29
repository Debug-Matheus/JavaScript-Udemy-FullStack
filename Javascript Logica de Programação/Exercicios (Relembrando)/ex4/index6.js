function esperar(segundos){
    if(typeof segundos !== 'number' || segundos < 0){
        throw new Error('Segundos invalidos')
    }
    return setTimeout(function(){
        console.log('Passaram ' + segundos + ' segundos') 
    },segundos * 1000)
}
try{
    esperar(2)
}catch(err){
    console.log(err.message)
}
