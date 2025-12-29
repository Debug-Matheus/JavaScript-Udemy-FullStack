function sorteio() {
    return Math.random()/*Number()*/ //+(Math.random() * (max - min) + min).toFixed(1)
}

function simularAPI() {
    if (sorteio() < 0.5) {
        throw new Error('Falha na api')
    } else {
        return 'Sucesso'
    }
}

    for (i = 0; i < 5; i++) {
        try {
            console.log(simularAPI())
        } catch (err) {
            console.log(err.message)
        } finally {
            console.log('Tentativa Finalizada: ' + i)
        }
    
    }




