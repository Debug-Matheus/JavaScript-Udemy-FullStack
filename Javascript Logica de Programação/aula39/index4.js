// WHILE E DO WHILE

function random(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let min = 1
let max = 50
let rand = 10

do{
    
    console.log(rand)
}while(rand !== 10)
console.log('Laço parado!')