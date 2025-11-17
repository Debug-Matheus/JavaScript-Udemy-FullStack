// WHILE E DO WHILE

function random(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let min = 1
let max = 50
let rand = random(min, max)

while(rand !== 10){
    rand = random(min,max)
    console.log(rand)
}
console.log('Laço parado!')