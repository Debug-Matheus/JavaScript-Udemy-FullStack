const soma = (a,b) =>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw('a e b precisam ser numeros')
    }
    return a+b
}

try{
    console.log(soma(8,'a'))
}catch(err){
    console.log(err)
}