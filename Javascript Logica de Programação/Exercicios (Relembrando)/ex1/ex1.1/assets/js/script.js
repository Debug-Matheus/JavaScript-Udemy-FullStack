       const inputDados = document.querySelector('#iadicionar')
        const botaoAdd = document.querySelector('.btn-add-dados')
        const exibirDados = document.querySelector('.dados')
        const dadosAdicionados = []
        function verificarDuplicidade(obj, array){
            return array.some(item => item.nome === obj.nome &&
            item.idade === obj.idade &&
            item.profissao === obj.profissao)
        }
        function verificarDadosInvalidos(nome, idade, profissao){
            return Number(nome)|| isNaN(idade)||Number(profissao)
        }
         
        function criarDados(input){
            const li = document.createElement('li')
            
            const virandoArray = input.split(',').map(item =>item.trim())
            const [nome,idade,profissao] = virandoArray

            if(verificarDadosInvalidos(nome, idade, profissao)|| input === ''){
                alert('Nome, idade, profissão invalido ou campo vazio')
                return
            }
            
            // const novo = {nome, idade, profissao} -> shorthand da operação abaixo
            const novo = {
                nome: nome,
                idade: idade,
                profissao: profissao
            }

            if(verificarDuplicidade(novo, dadosAdicionados)){
                alert('Já existe esses dados')
                return
            }else{
                 dadosAdicionados.push(novo)
            }
            
           
            // console.log(dadosAdicionados[0].nome)
            li.innerText = `Nome: ${nome} | Idade: ${idade} | Profissão: ${profissao}`
            
            exibirDados.appendChild(li)
        }
        
       botaoAdd.addEventListener('click', function(e){
            
        criarDados(inputDados.value)
            

        })