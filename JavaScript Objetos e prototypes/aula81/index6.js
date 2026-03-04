const pessoas = [
    {id:3, nome:'Luiz'},
    {id:2, nome:'Matheus'},
    {id:1, nome:'Caio'}
]
const novasPessoas = new Map()
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

for(const pessoa of novasPessoas){
    console.log(pessoa)
}
for(const [id,pessoa] of novasPessoas){
    console.log(id,pessoa)
}

