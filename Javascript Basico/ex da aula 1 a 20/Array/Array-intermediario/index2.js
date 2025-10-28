//Comando para usar prompt no terminal
const prompt = require('prompt-sync')()
const frutas = ['Melancia', 'Goiaba', 'Uva', 'Maçã']

//Substituindo a segunda fruta por Manga
frutas[1] = 'Manga'

console.log(frutas)

//Atribuindo a escolha do usuario numa constante
const escolha = prompt('Escolha uma fruta: ')

//Verificação: se não escontrar a escolha false ou true
if (frutas.indexOf(escolha) == -1){
    console.log('Não existe essa fruta')
}else{
    console.log(`Fruta ${escolha} encontrada`)
}
