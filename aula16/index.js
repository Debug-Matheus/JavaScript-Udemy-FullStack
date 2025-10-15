//ARRAYS

let alunos = ['Luiz', 'Carlos', 'Matheus']
alunos[3] = 'Leticia'
alunos[0] = 'Mauro'
console.log(alunos)
alunos.push('Felipe')
console.log(alunos)
console.log(alunos.sort())
console.log(`Quantidade de alunos: ${alunos.length}`)
console.log(`Alunos na posição 3: ${alunos[3]}`)
console.log(`A posição do aluno Matheus é a: ${alunos.indexOf('Matheus')}`)
