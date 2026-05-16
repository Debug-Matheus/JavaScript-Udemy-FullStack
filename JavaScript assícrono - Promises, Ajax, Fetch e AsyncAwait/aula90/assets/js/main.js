//Fetch + then e catch

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href')

    fetch(href)
    .then(response =>{
        if(response.status >= 200 && response.status < 300){
            throw new Error('Erro 404!')
        }
        return response.text()
    })
    .then(html =>{
        carregaResultado(html)
    })
    .catch(e =>{
        console.error(e)
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

