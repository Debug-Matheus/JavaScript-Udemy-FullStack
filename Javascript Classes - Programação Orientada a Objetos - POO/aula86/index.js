class Cpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfEnviado',{
            enumerable: true,
            value: cpfEnviado.replace(/\D/g, '')
        })
    }
    éSequencia(valor){
        return this.cpfEnviado.charAt(0).repeat(this.cpfEnviado.length) === this.cpfEnviado
        // return this.cpfEnviado.charAt(0).repeat(11) === this.c
    }
    validar(){
        if(!this.cpfEnviado)return false
        if(typeof this.cpfEnviado !== 'string')return false
        if(this.cpfEnviado.length !== 11) return false
        if(this.éSequencia())return false
        const array = Array.from(this.cpfEnviado)
        const cpfParcial = array.slice(0,9)
        const digito1 = this.calculo(cpfParcial)
        cpfParcial.push(digito1)
        const digito2 = this.calculo(cpfParcial)
        
        return digito1 === array[9] && digito2 === array[10]
    }
    calculo(valor){
        let quantidade = valor.length + 1
        
        let soma = 0
        for(let i = 0; i < valor.length; i++){
            soma += quantidade * Number(valor[i])
            quantidade--
        }
        const resto = soma % 11
        const resultado = 11 - resto
        return resultado > 9 ? '0' : String(resultado)
    }
    
}

const teste = new Cpf('712.304.194-11')
if(teste.validar()){
    console.log('CPF Valido')
}else{
    console.log('CPF Inválido')
}
