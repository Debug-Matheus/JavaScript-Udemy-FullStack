function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data){
        data = new Date();
    }
    
    return data.toLocaleTimeString('pt-BR', {

    })
}
try{
    const data = new Date()
    const hora = retornaHora()
    console.log(hora)
}catch(err){
    console.log(err)
}finally{
    const hora = new Date().getHours()
    const tempo = hora >= 5 && hora < 12
        ? "Tenha um bom dia"
        : hora >= 12 && hora < 18
            ? "Tenha uma boa tarde"
            : "Tenha uma boa noite"

    console.log(tempo)
}


