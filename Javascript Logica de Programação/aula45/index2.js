try{
    //Executada quando não houver erro
    console.log('Abrir um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
    try{
        console.log(x)
    }catch(err){
        console.log('Deu erro')
    }finally{
        console.log('TambDém sou finally')
    }
}catch(err){
    //Executada quando houver erro
    console.log('Tratando o erro')
}finally{
    //Executada sempre, usando em alguns momentos para limpar algo
    console.log('FINNALY: Eu sempre sou executado')
}