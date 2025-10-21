const num = [22,36,9,74,54]
const aleatorio = Math.round(Math.random() * (10-5) + 5)
console.log(aleatorio)
num.push(aleatorio)
console.log(num)
const primeiroRemovido = num.shift()
console.log(`Primeiro item removido: ${primeiroRemovido}`)
console.log(num)