function executarVezes(vezes, callbackFinal){
    let contador = 1;

    function executar(){
        console.log(`Executando ${contador}`)
        if(contador === vezes){
            callbackFinal?.()
            return
        }
        

        contador++
        setTimeout(executar,1000)
    }
    setTimeout(executar,1000)
}
 executarVezes(3, ()=>{
    console.log('Finalizado')
 });