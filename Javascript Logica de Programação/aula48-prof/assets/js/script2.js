//Logica Ideal para LocalStorage

const inputTarefa = document.querySelector('.input-tarefa')
const btn_add_tarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

function adicionaTarefaNaTela(textInput){
    const li = criaLi()
    li.innerText = textInput
    tarefas.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
}
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaLi() {
    const li = document.createElement('li')
    return li
}
function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Remover'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        if(!inputTarefa.value){
            alert('Preencha o campo para adicionar uma tarefa')
            return
        }
        adicionarTarefasSalvas(inputTarefa.value)
        salvarTarefas()
    }
})
btn_add_tarefa.addEventListener('click', function(e){
    
    if(!inputTarefa.value){
        alert('Preencha o campo para adicionar uma tarefa')
        return
    }
    adicionarTarefasSalvas(inputTarefa.value)
    salvarTarefas()
})
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Remover', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

// 6. CARREGAMENTO INICIAL (Apenas lê e desenha, sem disparar o salvarTarefas)
function adicionarTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas')
    if (!tarefasSalvas) return
    
    const listaDeTarefas = JSON.parse(tarefasSalvas)
    
    for (let tarefa of listaDeTarefas) {
        adicionaTarefaNaTela(tarefa) // Só desenha! Ninguém chama salvarTarefas() aqui.
    }
}
adicionarTarefasSalvas()