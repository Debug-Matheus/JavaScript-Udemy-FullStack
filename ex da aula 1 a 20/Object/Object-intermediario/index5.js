const geradorAleatorio = {
    aleatorio: function(min,max){
        return Math.floor(Math.random() * (max-min+1) + min)
    }
}
numero1 = geradorAleatorio.aleatorio(5,20)
console.log(numero1)