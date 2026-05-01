Promise.reject('erro')
    .then(() => console.log('1'))
    .then(() => console.log('2'))
    .catch(e => console.log('erro caiu aqui'))