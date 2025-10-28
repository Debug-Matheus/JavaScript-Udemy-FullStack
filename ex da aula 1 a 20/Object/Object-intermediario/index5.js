// const geradorAleatorio = {
//     aleatorio: function(min,max){
//         return Math.floor(Math.random() * (max-min+1) + min)
//     }
// }
// numero1 = geradorAleatorio.aleatorio(5,20)
// console.log(numero1)
function aleatorio(max,min){
    return Math.floor(Math.random()* (max-min +1 ) + min)
}
const geradorAleatorio = {
    numeroAleatorio: aleatorio(5,100)
}
const numero = geradorAleatorio.numeroAleatorio;
console.log(numero)