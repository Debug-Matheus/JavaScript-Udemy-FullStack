function getDiaSemana (dia){
    let verificarDia;
    switch (dia){
        case 0:
        verificarDia = 'Domingo'
        break;
    case  1:
        verificarDia = 'Segunda'
        break;
    case  2:
        verificarDia = 'Terça'
        break;        
    case  3:
        verificarDia = 'Quarta'
        break;
    case  4:
        verificarDia = 'Quinta'
        break;
    case  5:
        verificarDia = 'Sexta'
        break;
    case  6:
        verificarDia = 'Sábado'
        break;
    default:
        verificarDia = 'Dia Invalido'
    }
    return verificarDia
}

const data = new Date()
const diaSemana = data.getDay()
const diaSemanaDepois = getDiaSemana(diaSemana)
console.log(diaSemanaDepois)
