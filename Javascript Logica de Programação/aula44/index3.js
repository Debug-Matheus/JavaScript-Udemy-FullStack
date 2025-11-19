function soma (x,y){
    if(typeof x !== 'number'|| typeof y !== 'number'){
        throw new Error ('x e y precisam ser numeros.')
    }
    return x + y
}

try{
    console.log(soma(8,'1'))
}catch(err){
    console.log(err)
}