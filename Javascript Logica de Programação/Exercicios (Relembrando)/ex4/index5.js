function contagemRegressiva(){
    let contador = 10

    const timer = setInterval(function(){
        if(contador > 0){
            console.log(contador)
            contador--

        }else{
            console.log('Boom!')
            clearInterval(timer)
        }
    },1000)
}
contagemRegressiva()


