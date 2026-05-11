//MODO NOVO Async/Await
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() //cria um objeto ajax
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    try {
        const objConfig = {
            method: 'GET',
            url: href
        }
        const response = request(objConfig)
        const responseNow = await response
        carregaResultado(responseNow)
    } catch (error) {
        console.log(error)
    }
    
}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

