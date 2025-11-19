//Exercicio: Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paissagem

const ePaisagem = (largura, altura)=> largura > altura 

let largura = 1360
let altura = 720

const modoPaissagem = ePaisagem (largura, altura)

console.log(`A imagem está em modo paissagem ? ${modoPaissagem}`)