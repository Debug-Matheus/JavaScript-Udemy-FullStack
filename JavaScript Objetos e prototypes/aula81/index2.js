const pessoas = [
    {id:3, nome:'Luiz'},
    {id:2, nome:'Matheus'},
    {id:1, nome:'Caio'}
]
const novasPessoas = {}
for(const pessoa of pessoas){
    const {id} = pessoa
    console.log(id)
    novasPessoas[id] = {...pessoa}
}
console.log(novasPessoas)