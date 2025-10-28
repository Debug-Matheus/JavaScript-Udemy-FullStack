
//Exercicio simples, porém como tenho uma certa experiencia com js, fiz algo aprofundado.
// Passando hora, minuto e secundo em tempo real. 
var hora = new Date().getHours()
var min = new Date().getMinutes()
var sec = new Date().getSeconds()
var tempo = ""
// -------------------
//Verificação para acrecentar um hora atrás da hora, min e sec
if(hora < 10){
    hora = "0" + hora 
}
if(min < 10){
    min = "0" + min
}
if(sec < 10){
    sec = "0" + sec
}
//--------------------------
//Verificação para saber se é manhã, tarde ou noite
if (hora >=5 && hora <12){
    tempo = "manhã"
}else if( hora >=19 && hora < 5 ){
    tempo = "noite"
}else{
    tempo = "tarde"
}
console.log(`Meu nome é "Matheus". Estou aprendendo Javascript às ${hora}:${min}:${sec} da ${tempo}.`)
console.log('Meu é Matheus. Estou aprendendo JavaScript',11, 'da manhã')
