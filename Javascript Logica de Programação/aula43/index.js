//Escreva uma função que recebe um numero e retorna o seguinte: 
//Número é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero nao é divisivel por 3 e 5 = Retorna o proprio numero
//Checar se o numero recebido é realmente um numero = Retorna o proprio numero
//Use a funcao com numeros de 0 a 100

const verificarNumero = (numero) => {
    return typeof numero !== 'number' ? numero : numero % 3 === 0 && numero % 5 === 0 ? 'FizzBuzz' : numero % 3 === 0 ? 'Fizz' : numero % 5 === 0 ? 'Buzz'  : numero
}
for(let i = 0; i <= 100; i++){
    console.log(i, verificarNumero(i))
}


