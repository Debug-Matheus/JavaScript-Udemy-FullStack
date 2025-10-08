//Tipos de dados primitivos
//String, Number, Underfined, null, boolean, symbol -> ja vistos

const nome = 'Matheus'; //string
const nome1 = "Matheus"; //string
const nome2 = `Matheus`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno;// undefined -> não aponta pra local nenhum na memória
const sobreNome = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Booleano -> true, false (lógico)

console.log(typeof(nome, nome1, nome2))
console.log(typeof(num1, num2))
console.log(typeof(nomeAluno))
console.log(typeof(sobreNome))
console.log(typeof(aprovado))

// let a = 5
// let b = a
// console.log(a,b)
// a = 3
// console.log(a,b)

let a = [1,2]
let b = a
console.log(a,b)
b.push(3);
console.log(a,b)