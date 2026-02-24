/*7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40  28  48  20  16  15  0 = 237

11- (237 % 11) = 5
11 - 5 = 6
11 - 6 = 5
Se o digito for maior que 9, ele se torna 0
*/

let cpf = '705.484.450'
let cpfLimpo = cpf.replace(/\D/g, '')//Expressão regular para pegar tudo que não for número e substituir por nada


cpf = cpfLimpo.split('')
console.log('Cpf: ' + cpf)
const recebeCpf = [...cpf]

let cont2 = 10
for(let cont = 0; cont < recebeCpf.length; cont++){
    recebeCpf[cont] *= cont2
    cont2--
    
}
console.log('RecebeCpf: ' + recebeCpf)
function retornarResultado(){
    const total = recebeCpf.reduce(function(acumulador,valor){
        acumulador += valor
        return acumulador
    },0)
    return total
}

let result = retornarResultado()

console.log('Soma: '+ result)

function formula(valor){
    let n1 = 11
    if((n1 - (valor % n1)) < 9){
        return n1 - (valor % n1)
    }else{
        return 0
    }
}
let digito = formula(result)
console.log(digito)

cpf.push(digito)
console.log(cpf)


