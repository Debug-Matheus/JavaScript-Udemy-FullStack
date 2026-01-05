function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        console.log(numero)
    }
    for(let operacao of numeros){
        if(operador === '+') acumulador += operacao
        if(operador === '-') acumulador -= operacao
        if(operador === '/') acumulador /= operacao
        if(operador === '*') acumulador *= operacao
        
    }
    console.log(acumulador)
}
conta('/', 0, 20,30,40,50)
