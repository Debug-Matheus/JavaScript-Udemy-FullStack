const resposta = document.getElementById('res')
const data = new Date()

function getDiaSemana(diaSemana){
    const diasSemanas = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diasSemanas[diaSemana]
}
function getNomeMes(numeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes]
}
function zeroAESQUERDA(num){
    return num < 10 ? `0${num}`: num
}
function criarData(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemana(diaSemana)
    const nomeMes = getNomeMes(numeroMes)
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAESQUERDA(data.getHours())}:${zeroAESQUERDA(data.getMinutes())}`
    )
}
resposta.innerHTML = criarData(data)