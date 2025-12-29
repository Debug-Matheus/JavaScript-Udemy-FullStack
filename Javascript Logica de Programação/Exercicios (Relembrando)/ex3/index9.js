function login(usuario,senha){
    
    if(typeof usuario !== 'string'){
        throw new Error('Usuário invalido')
    }
    if(usuario.trim().length === 0){
        throw new Error('Usuario não pode ser vazio')
    }
    if(!isNaN(Number(usuario))){
        throw new Error('Usuário não pode ser só numeros')
    }
    if(typeof senha !== 'string' || senha.length < 4){
        throw new Error('Senha fraca, precisa ter 4 ou mais caracteres')
    }
    return console.log('Usuario Logado!')
}

try{
    
    login('15555','senha')
    
}catch(e){
    console.log(e.message)
}finally{
    console.log('Tentaiva registrada:')
}
