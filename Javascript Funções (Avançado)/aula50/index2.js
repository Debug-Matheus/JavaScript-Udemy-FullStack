//Parametro da função
//arguments que sustenta todos os argumentos enviados
//arguments só funciona para funções que comecem com a palavra function
function funcao(a,b,c){
    let res = 0;
    for(let soma of arguments){
        res += soma
    }
    console.log(res,a,b,c)
}
funcao(1,2,3,4,5,6,7)