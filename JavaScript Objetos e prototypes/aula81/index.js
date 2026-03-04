const pessoas = [
    {id:1, nome:'Luiz'},
    {id:2, nome:'Matheus'},
    {id:3, nome:'Caio'}
]


for(let i = 0; i < pessoas.length; i++){
    const {nome:apenasNome} = pessoas[i]
    console.log(apenasNome)
}
console.log('==================')
for(const pessoa of pessoas){
    const {nome:apenasNome} = pessoa
    console.log(apenasNome)
}