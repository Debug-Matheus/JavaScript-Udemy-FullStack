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
for(const pessoas of novasPessoas.keys()){
    console.log(pessoas)
}

for(const pessoa of novasPessoas.values()){
    console.log(pessoa)
}
