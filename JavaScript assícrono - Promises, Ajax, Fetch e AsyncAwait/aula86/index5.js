const p = new Promise((resolve) => {
    console.log('Executando a Promise')
    setTimeout(() => {
        resolve('Resolveu')
    }, 1000)
})

console.log('Depois da criação')

p.then(r => console.log(r))