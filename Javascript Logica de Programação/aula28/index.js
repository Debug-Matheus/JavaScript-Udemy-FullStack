//OBJETO DATE
// const data = new Date()
// console.log(data.toString())
const data =  new Date('2020-02-12 20:20:59')
console.log(`Dia ${data.getUTCDate()}`)
console.log(`Mês ${data.getUTCMonth() + 1}`)//MÊS começa do 0
console.log(`Ano ${data.getFullYear()}`)
console.log(`Hora ${data.getUTCHours()}`)
console.log(`Min ${data.getUTCMinutes()}`)
console.log(`Seg ${data.getUTCSeconds()}`)
console.log(`ms ${data.getUTCMilliseconds()}`)
console.log(`Dia semana ${data.getDay()}`) // 0 - Domingo, 6 - sábado
console.log(data.toString())
