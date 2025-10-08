// Exercicio com CONST E LET
const nomeSobrenome = 'Matheus Vasconcelos';
const idade = 24;
const peso = 75;
const altura = 1.68
let imc = peso / (altura **2);
let anoNascimento = new Date().getFullYear() - idade;
console.log(nomeSobrenome, 'tem', idade,'anos, pesa',peso,'kg')
console.log('tem', altura, 'de altura e seu IMC é de', imc.toFixed(2))
console.log(nomeSobrenome, 'nasceu em: ', anoNascimento)
