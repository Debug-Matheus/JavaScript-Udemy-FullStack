       let nomeInput = document.getElementById('inome')
        let concluidaInput = document.getElementById('concluida')
        let naoConcluidaInput = document.getElementById('naoConcluida')
        const tarefasConcluidas = []
        const tarefasNaoConcluidas = []
        let contador = 0
        function lista(nomeBuscado, listaTarefa){
            return listaTarefa.some(p =>
                p.nome.trim().toLowerCase() === nomeBuscado.trim().toLowerCase()
            );
        }
        function cadastrar(){
            let nomeValor = nomeInput.value; 
            if(nomeValor == ""){
                window.alert('Preencha o campo')
                return
            }

            const cadastroTarefa = {
                nome: nomeValor,
                concluida: false,
                id:contador
                
            }
            if(!lista(nomeValor,tarefasNaoConcluidas) && !lista(nomeValor, tarefasConcluidas)){
                tarefasNaoConcluidas.push(cadastroTarefa)
                let ul = naoConcluidaInput.querySelector('ul')
                if (!ul) {
                    ul = document.createElement('ul')
                    naoConcluidaInput.appendChild(ul)
                }
                const li = document.createElement('li')
                li.classList.add('tarefa-item')

                const check = document.createElement('input')
                check.type = 'checkbox'
                check.classList.add('tarefa-check')
                check.dataset.id = cadastroTarefa.id

                const label = document.createElement('label')
                label.textContent = nomeValor

                li.appendChild(check)
                li.appendChild(label)
                ul.appendChild(li)

                contador++
            }else{
                window.alert('Tarefa ja cadastrada')
            }
            nomeInput.value = ''
            nomeInput.focus()

        }
        function concluir() {
            const marcados = document.querySelectorAll('.tarefa-check:checked')
            if(tarefasNaoConcluidas == ""){
                window.alert('Não há tarefa para concluir')
                return
            }
            marcados.forEach(chk => {
                const id = Number(chk.dataset.id)

                // encontra a tarefa correspondente
                const tarefa = tarefasNaoConcluidas.find(p => p.id === id)

                if (tarefa) {
                    tarefa.concluida = true
                    tarefasConcluidas.push(tarefa)

                    // remove do array de não concluídas
                    const index = tarefasNaoConcluidas.findIndex(p => p.id === id)
                    if (index !== -1) tarefasNaoConcluidas.splice(index, 1)

                    // remove do HTML da lista de não concluídas
                    chk.parentElement.remove()
                    let ulConcluida = concluidaInput.querySelector('ul')
                    if (!ulConcluida) {
                        ulConcluida = document.createElement('ul')
                        concluidaInput.appendChild(ulConcluida)
                    }
                    const li = document.createElement('li')
                    li.classList.add('tarefa-item')

                    const check = document.createElement('input')
                    check.type = 'checkbox'
                    check.classList.add('tarefa-check')
                    check.dataset.id = tarefa.id
                    check.checked = true

                    const label = document.createElement('label')
                    label.textContent = tarefa.nome

                    li.appendChild(check)
                    li.appendChild(label)
                    ulConcluida.appendChild(li)
                }
            })

            console.log('✅ Tarefas concluídas:', tarefasConcluidas)
            console.log('❌ Tarefas não concluídas:', tarefasNaoConcluidas)
        }
        function naoConcluir() {
            const marcados = document.querySelectorAll('.tarefa-check:checked')
            if(tarefasConcluidas == ""){
                window.alert('Não há tarefa concluída')
                return
            }
            marcados.forEach(chk => {
                const id = Number(chk.dataset.id)

                // encontra a tarefa correspondente
                const tarefa = tarefasConcluidas.find(p => p.id === id)

                if (tarefa) {
                    tarefa.concluida = false
                    tarefasNaoConcluidas.push(tarefa)

                    // remove do array de não concluídas
                    const index = tarefasConcluidas.findIndex(p => p.id === id)
                    if (index !== -1) tarefasConcluidas.splice(index, 1)

                    // remove do HTML da lista de não concluídas
                    chk.parentElement.remove()
                    let ulNaoConcluida = naoConcluidaInput.querySelector('ul')
                    if (!ulNaoConcluida) {
                        ulNaoConcluida = document.createElement('ul')
                        naoConcluidaInput.appendChild(ulNaoConcluida)
                    }
                    const li = document.createElement('li')
                    li.classList.add('tarefa-item')

                    const check = document.createElement('input')
                    check.type = 'checkbox'
                    check.classList.add('tarefa-check')
                    check.dataset.id = tarefa.id
                    check.checked = true

                    const label = document.createElement('label')
                    label.textContent = tarefa.nome

                    li.appendChild(check)
                    li.appendChild(label)
                    ulNaoConcluida.appendChild(li)
                }
            })

            console.log('✅ Tarefas concluídas:', tarefasConcluidas)
            console.log('❌ Tarefas não concluídas:', tarefasNaoConcluidas)
        }
        function remover() {
            const marcados = document.querySelectorAll('.tarefa-check:checked')
            if(tarefasConcluidas == "" && tarefasNaoConcluidas == ""){
                window.alert('Não existe tarefa para remover')
                return
            }
            marcados.forEach(chk => {
                const id = Number(chk.dataset.id)

                // Remove do array de não concluídas
                const indexNaoConcluida = tarefasNaoConcluidas.findIndex(p => p.id === id)
                if (indexNaoConcluida !== -1) {
                    tarefasNaoConcluidas.splice(indexNaoConcluida, 1)
                }

                // Remove do array de concluídas
                const indexConcluida = tarefasConcluidas.findIndex(p => p.id === id)
                if (indexConcluida !== -1) {
                    tarefasConcluidas.splice(indexConcluida, 1)
                }

                // Remove do HTML
                chk.parentElement.remove()
            })

        console.log('🗑️ Após deletar:')
        console.log('✅ Concluídas:', tarefasConcluidas)
        console.log('❌ Não concluídas:', tarefasNaoConcluidas)
    }