/*Resumo prático para o seu futuro como dev:
- Sempre que você criar um sistema com localStorage, pergunte-se: "A função que estou chamando agora vai tentar gravar dados no navegador?".
- Se a resposta for sim, mas os dados já estão guardados lá, você precisa impedir isso — seja passando um parâmetro false (como você fez brilhantemente) ou separando o código em funções diferentes.*/

const inputTarefa = document.querySelector('.input-tarefa')
const btn_add_tarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

//keyupp -> tecla pressionada e solta, quando solta é que acontece o evento

//keydown -> tecla pressionada e continuando pressionada

//keypress -> É quando a tecla é pressionada, então pressionou capturou
inputTarefa.addEventListener('keydown', function (e) {
    // console.log(e) //-> ver teclado pressionada a partir do evento
    if (e.key === 'Enter') {
        // console.log('ENTER pressionado')
        if (!inputTarefa.value) {
            alert('Preencha o campo para adicionar uma tarefa')
            return
        };
        criaTarefa(inputTarefa.value)
    }
})



function criaTarefa(textoInput, salvar = true) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
    if (salvar) salvarTarefas()
}
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}
function criaLi() {
    const li = document.createElement('li')
    return li
}
function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Remover'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}
btn_add_tarefa.addEventListener('click', function () {
    if (!inputTarefa.value) {
        alert('Preencha o campo para adicionar uma tarefa')
        return
    };
    criaTarefa(inputTarefa.value)
})
document.addEventListener('click', function (e) {
    const el = e.target
    // console.log(el)
    if (el.classList.contains('apagar')) {
        // console.log(el.parentElement)
        el.parentElement.remove()
        salvarTarefas()// Importante salvar as tarefas no evento de apagar, para quando clicar no apagar sera removido também no localStorage
    }
})
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Remover', '').trim()
        listaDeTarefas.push(tarefaTexto)

    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) //Convertir a lista de tarefas que está num array para strings
    localStorage.setItem('tarefas', tarefasJSON) //Só pode salvar strings
    console.log('💾 A função salvarTarefas() foi executada!');
}
//Quando o site for carregado, ele vai chamar essa funcao
function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas') //Pegar as tarefas do localStorage
    if (!tarefas) return //Se nao tiver tarefas, retorna
    const listaDeTarefas = JSON.parse(tarefas) //Convertir as strings para array
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa,false)
    }
}
adicionarTarefasSalvas()