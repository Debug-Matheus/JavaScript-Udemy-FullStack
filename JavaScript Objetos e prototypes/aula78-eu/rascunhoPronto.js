function calcularDigito(baseArray) {
    let multiplicador = baseArray.length + 1
    let soma = 0
    
    for (let i = 0; i < baseArray.length; i++) {
        soma += Number(baseArray[i]) * multiplicador
        multiplicador--
        
    }
    
    const resto = soma % 11
    const digito = 11 - resto
    return digito > 9 ? 0 : digito
    
}

function validarCpf(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '')

    // Regra básica
    if (cpfLimpo.length !== 11) return false

    const cpfArray = cpfLimpo.split('')

    // Primeiros 9 dígitos
    const base = cpfArray.slice(0, 9)

    // Calcula 10º
    const digito1 = calcularDigito(base)
    base.push(digito1)

    // Calcula 11º
    const digito2 = calcularDigito(base)

    // Compara com os dígitos informados
    return digito1 == cpfArray[9] && digito2 == cpfArray[10]
}
// ===== TESTE =====
(function cpfMariaValidar(){
    const cpfDigitado = '705.484.450-52'
    
    if (validarCpf(cpfDigitado) ) {
    console.log('CPF válido')
    } else {
    console.log('CPF inválido')
    }
}())
    
