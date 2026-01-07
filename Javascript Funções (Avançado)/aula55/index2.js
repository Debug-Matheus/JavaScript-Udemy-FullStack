(function (idade,peso,altura){
    const sobrenome = 'Vasconcelos'
    function criarNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criarNome('Matheus'))
    }
    falaNome()
    console.log(idade,peso,altura)
    
})(30,80,1.70);