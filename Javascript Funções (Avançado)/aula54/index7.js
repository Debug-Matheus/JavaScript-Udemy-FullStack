function salvarDados(callback){
    setTimeout(()=>{
        console.log('Dados salvos')
        if(typeof callback === 'function'){
            callback()
        }//callback?.()
    },1000)
}