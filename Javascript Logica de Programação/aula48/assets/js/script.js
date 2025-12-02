function tarefas(){
    const botãoAdd = document.querySelector('.btn-add-tarefa')
        const inputTarefa = document.querySelector('.input-nova-tarefa')
        const exibirTarefas = document.querySelector('.tarefas')
        let tarefasAdicionadas = [];
        //Se o nome que eu coloco no input for igual ao que eu tenho no array, ele retorna true
        function verificarTarefa( tarefa,arrayTarefa){
            return arrayTarefa.some(p =>
                p.tarefa.trim().toLowerCase() === tarefa.trim().toLowerCase()
            )
            
        }
        //Evento de adicionar
        botãoAdd.addEventListener('click', function(e){
            e.preventDefault()
            const inputTarefaValor = inputTarefa.value.trim()

            //Verifica se o input esta vazio ou se a tarefa ja foi adicionada
            if(inputTarefaValor === '' || verificarTarefa(inputTarefaValor, tarefasAdicionadas)){
                alert('Tarefa ja adicionado ou o caDDmpo encontra-se vazio')
                return
            }
                //Adiciona no array
                const addTarefa = {
                    tarefa: inputTarefaValor
                }
                tarefasAdicionadas.push(addTarefa)
                
                //Cria li
                const li = document.createElement('li')
                li.innerText = inputTarefaValor
                li.dataset.tarefa = inputTarefaValor.toLowerCase()

                //Cria input
                const input_child_li = document.createElement('input')
                input_child_li.type = 'submit'
                input_child_li.value = 'Remover'
                input_child_li.classList.add('remove')

                //Adiciona li e input
                exibirTarefas.appendChild(li)
                li.appendChild(input_child_li)
                inputTarefa.value = ''
                inputTarefa.focus()
                console.log(tarefasAdicionadas)
            //Evento de Remover
            input_child_li.addEventListener('click', function(e){
                e.preventDefault()
                //Pega a tarefa do dataset da li que foi clicada para remover do array
                const tarefa = li.dataset.tarefa

                //Removendo do array e criando um novo array
                tarefasAdicionadas = tarefasAdicionadas.filter(p => p.tarefa.toLowerCase() !== tarefa)

                //Removendo do HTML
                exibirTarefas.removeChild(li)
                console.log(tarefasAdicionadas)
            })
            
        })
}

tarefas()
