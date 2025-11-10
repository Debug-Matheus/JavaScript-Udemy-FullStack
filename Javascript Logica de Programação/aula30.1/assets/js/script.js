const h2 = document.getElementById('res')
const data = new Date()

const options = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h2.innerHTML = data.toLocaleString('pt-BR', options)