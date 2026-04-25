class formularioDeCadastro{
    constructor(){
        this.nome = document.getElementById('inome').value
        this.sobrenome = document.getElementById('isobrenome').value
        this.cpfLimpo = document.getElementById('icpf').value.replace(/\D+/g, '')
        this.usuario = document.getElementById('iusuario').value
        this.senha = document.getElementById('isenha').value
        this.repsenha = document.getElementById('irepetir').value
    }
    verificacaoVazio(){
        const inputs = document.querySelectorAll('.input-data')
        const spanVazio = document.querySelectorAll('.erroVazio')

        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value === ''){
                spanVazio[i] = spanVazio[i].classList.add('error')
            }else{
                spanVazio[i] = spanVazio[i].classList.remove('error')
            }
        }
    }
    verificaNomeESobrenome(){
        const regex = /^[a-zA-ZÀ-ÿ]+$/
        if(!regex.test(this.nome) || !regex.test(this.sobrenome)){
            throw new Error('O nome e sobrenome deverao conter apenas letras')
            
            
        }
    }
    validaCpf(){
        if(this.cpfLimpo.length !== 11) {
            throw new Error('Cpf conter 11 digitos')
        }
        if(this.isSequencia()) {
            throw new Error('Cpf nao pode ser uma sequencia')
        }

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.criarDigito(cpfParcial)
        const digito2 = this.criarDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2
        if(novoCpf === this.cpfLimpo){

        }
        return this.cpfLimpo === novoCpf
    }
    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
    criarDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)

        let quantidade = cpfArray.length + 1
        const total = cpfArray.reduce(function(acumulador,valor){
            acumulador += quantidade * Number(valor)
            quantidade--
            return acumulador
        },0)
        const digito = 11 -(total % 11)
        return digito > 9 ? '0' : String(digito)
    }
    aprovaCpf(){
        if(!this.validaCpf()){
        }
    }
    verificaUsuario(){
        const regex = /^[a-zA-Z0-9]+$/;
        if(!regex.test(this.usuario)){
            
        }
        if(this.usuario.length < 5 || this.usuario.length > 16){
           
        }
    } 
    verificaSenha(){
        if(this.senha.length < 6 || this.senha.length > 13){
            
        }
        if(this.senha !== this.repsenha){
            
        }
    }
    static arrayObjetos(valor){
        const array = []
        array.push(valor)
        return array
    }
    static form(){
        const form = document.querySelector('form')
        return form
    }
}
document.querySelectorAll('.lnr-eye').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const input = this.previousElementSibling;

        input.type = input.type === 'password' ? 'text' : 'password';

        
    });
});

formularioDeCadastro.form().addEventListener('submit', function(e){
    e.preventDefault()

    const form = new formularioDeCadastro()
    form.verificacaoVazio()
})
