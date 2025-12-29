//Jogue o resto dentro de outro array usando desestruturação com rest operator.
const dados = ["Matheus", 20, "Brasil", "Gamer", "Dev", "Aluno"]
const[nome, ...rest] = dados
console.log(nome)
console.log(rest)