function pessoas(nome, idade, cidade){
    return{
        nome:nome,
        idade:idade,
        cidade:cidade
    }
}
const pessoa1 = pessoas('Lucas', 15, 'Olinda')
const pessoa2 = pessoas('Maria', 25, 'Recife')
const pessoa3 = pessoas('Debora', 35, 'Boa viagem')
const pessoa4 = pessoas('Telma', 45, 'Porto de galinhas')

console.log(`${pessoa1.nome}, ${pessoa1.idade}, ${pessoa1.cidade}`)