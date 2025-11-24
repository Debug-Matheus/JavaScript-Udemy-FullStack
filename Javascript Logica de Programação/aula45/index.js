try{
    //Executada quando não houver erro
    console.log(a)
    console.log('Abrir um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
}catch{
    //Executada quando houver erro
    console.log('Tratando o erro')
}finally{
    //Executada sempre, usando em alguns momentos para limpar algo
    console.log('FINNALY: Eu sempre sou executado')
}