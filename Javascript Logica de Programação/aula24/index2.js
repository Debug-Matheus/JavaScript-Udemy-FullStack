//Verificação de numero certo com IF , ELSE IF, ELSE
const numero = 35;
const numeroCerto = 35
if(numero >= 0 && numero < 30 ){
    console.log('Está longe do número certo. O valor é maior')
}else if(numero >30 && numero <35){
    console.log('Está bem perto do número certo')
}else if(numero >35){
    console.log('Está longe do número certo. O valor é menor')
}else{
    console.log('Acertou o número')
}