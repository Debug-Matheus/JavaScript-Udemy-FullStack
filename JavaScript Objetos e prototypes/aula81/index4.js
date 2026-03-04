const pessoas = [
    {id:1, nome:'Luiz'},
    {id:2, nome:'Matheus'},
    {id:3, nome:'Caio'}
]
const novasPessoas = {}
for(let i = 0; i < pessoas.length; i++){
    const {id} = pessoas[i]
    novasPessoas[id] = {...pessoas[i]}
}

console.log(novasPessoas[1])
