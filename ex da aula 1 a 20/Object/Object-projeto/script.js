        let produtos = []
        let nome = document.getElementById('inome')
        let preco = document.getElementById('ipreco')
        let desconto = document.getElementById('idesconto')
        let exibir = document.getElementById('listaDeProdutos')
        let contador = 0
            function aplicarDesconto(percentual, valor){
                if(percentual > 0){
                    const descontoInteiro = percentual * valor;
                    return  valor - descontoInteiro;
                    
                }
                return valor
            }
            function lista(nomeBuscado, listaProdutos) {
                return listaProdutos.some(p => 
                p.nome.trim().toLowerCase() === nomeBuscado.trim().toLowerCase());
                
            }
        function cadastrar(){
            nomeValor = nome.value
            precoValor = Number(preco.value)
            descontoValor = Number(desconto.value)/100
            
            let cadastrarProdutos = {
                nome: nomeValor,
                preco : aplicarDesconto(descontoValor, precoValor),
                desconto: descontoValor,
                id:contador
            }
            if(!lista(nomeValor,produtos)){
                produtos.push(cadastrarProdutos)
                const linha = document.createElement('div')
                linha.classList.add('produto-item')

                const check = document.createElement('input')
                check.type = 'checkbox'
                check.classList.add('produto-check')
                check.dataset.id = cadastrarProdutos.id

                const label = document.createElement('label')
                label.textContent = `Id: ${cadastrarProdutos.id} | Nome: ${cadastrarProdutos.nome} | Preço: ${cadastrarProdutos.preco} | Desconto: ${cadastrarProdutos.desconto *100}%`

                linha.appendChild(check)
                linha.appendChild(label)
                exibir.appendChild(linha)
                console.log(produtos)
            }else{
                window.alert('Produto ja cadastrado')
                return
            }
            contador++
            
            
        }
        function deletar(){
            const marcados = document.querySelectorAll('.produto-check:checked')

             marcados.forEach(chk => {
            const id = Number(chk.dataset.id)
            produtos = produtos.filter(p => p.id !== id)
            chk.parentElement.remove()
            })

            console.log('Após deletar:', produtos)
        }
        function buscar() {
            const nomeBuscado = nome.value.trim().toLowerCase()

            const encontrado = produtos.find(p => p.nome.toLowerCase() === nomeBuscado)

            if (encontrado) {
                console.log('Produto encontrado:', encontrado)
                alert(`Produto: ${encontrado.nome}\nPreço: R$${encontrado.preco.toFixed(2)}\nDesconto: ${encontrado.desconto * 100}%`)
            } else {
                alert('Produto não encontrado!')
            }
        }
        function alterar() {
            const nomeBuscado = nome.value.trim().toLowerCase()
            const novoPreco = Number(preco.value)
            const novoDesconto = Number(desconto.value) / 100

            const produto = produtos.find(p => p.nome.toLowerCase() === nomeBuscado)

            if (produto) {
                // Atualiza os dados do objeto
                produto.preco = aplicarDesconto(novoDesconto, novoPreco)
                produto.desconto = novoDesconto

                // Atualiza o texto no HTML
                const label = document.querySelector(`.produto-check[data-id='${produto.id}'] + label`)
                if (label) {
                    label.textContent = `Id: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco} | Desconto: ${produto.desconto * 100}%`
                }

                alert(`Produto "${produto.nome}" alterado com sucesso!`)
                console.log('Após alteração:', produtos)
            } else {
                alert('Produto não encontrado!')
            }
        }