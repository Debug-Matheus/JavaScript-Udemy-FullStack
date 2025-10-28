// const alunos =[
//      {nome: 'Matheus', nota: 7.5},
//      {nome: 'Felipe', nota: 9},
//      {nome: 'Bernardo', nota: 3},
//      {nome: 'Pedro', nota: 2},
//      {nome: 'Maria', nota: 10},
// ]


// const alunosAprovados = alunos.filter(function aluno(aluno){
//     return aluno.nota > 7
// })

// console.log(alunosAprovados)

const alunos =[
     {nome: 'Matheus', nota: 7.5},
     {nome: 'Felipe', nota: 9},
     {nome: 'Bernardo', nota: 3},
     {nome: 'Pedro', nota: 2},
     {nome: 'Maria', nota: 10},
]


const alunosAprovados = alunos.filter(aluno => aluno.nota > 7)

console.log(alunosAprovados)