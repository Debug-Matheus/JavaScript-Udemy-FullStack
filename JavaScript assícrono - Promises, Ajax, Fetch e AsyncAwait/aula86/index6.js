console.log('1')

const p = new Promise((resolve, reject) => {
    console.log('2')
    
    if(true) {
        reject('erro')
        return
    }
    resolve('3')
    console.log('5')
})

console.log('4')
p.catch(e => console.log(e))
p.then(r => console.log(r))