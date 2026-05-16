//Fetch + try e catch + async/await

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href')
        const paralelo = fetch(href)
        const response = await paralelo

        if (response.status >= 200 && response.status < 300) {
            throw new Error('Error 404!')
        }
        const html = await response.text()
        carregaPagina(html)
    } catch (error) {
        console.error(error)
    }

}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}