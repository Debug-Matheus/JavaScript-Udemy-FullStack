function formula(cpfNoveDigitos){
    let quantidadeDigitos = cpfNoveDigitos.length + 1
    let soma = 0
    for(let cont = 0; cont < cpfNoveDigitos.length; cont++){
        soma += Number(cpfNoveDigitos[cont]) * quantidadeDigitos
        quantidadeDigitos --
    }
    const resto = soma % 11
    const digito = 11 - resto
    return digito > 9 ? 0 : digito
}

function validarCpf(cpfInicial){
    const cpfOrganizar = cpfInicial.replace(/\D/g, '')
    if(cpfOrganizar.length !== 11) return false

    if (/^(\d)\1{10}$/.test(cpfOrganizar)) return false

    const cpfArray = cpfOrganizar.split('')

    const cpfNoveDigitos = cpfArray.slice(0,9)

    const digito1 = formula(cpfNoveDigitos)

    cpfNoveDigitos.push(digito1)

    const digito2 = formula(cpfNoveDigitos)

    return digito1 == cpfArray[9] && digito2 == cpfArray[10]
}
function receberCpfValidado(entrada){
    
    if(validarCpf(entrada)){
        return true
    }
    throw new Error('Cpf inválido')
}

(function inicio(){
    const form = document.querySelector('#form')
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const entradaUsuario = document.querySelector('#cpf').value
        try {
            if(receberCpfValidado(entradaUsuario)){
                
                alert('Cpf Valido')
                const resultado = document.querySelector4('#resultado')
                resultado.innerHTML = 'Cpf Valido✅'
            }
            
        } catch (error) {
            alert(error.message)
            const resultado = document.querySelector('#resultado')
            resultado.innerHTML = 'Cpf Inválido❌'
        }finally{
            form.reset()
            document.querySelector('#cpf').focus()
        }
        
    })
}())
