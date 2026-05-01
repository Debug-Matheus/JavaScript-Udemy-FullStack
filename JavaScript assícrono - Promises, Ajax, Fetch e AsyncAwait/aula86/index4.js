new Promise((resolve, reject) => {
    console.log('A')
    reject('erro')
    console.log('B')
})
.catch(e => console.log('C'))