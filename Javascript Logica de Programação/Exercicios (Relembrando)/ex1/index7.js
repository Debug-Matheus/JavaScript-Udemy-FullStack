//Pegue:
//"Python"
//"CSS"
//"Node"
//Cada um em uma variável diferente usando apenas desestruturação ANINHADA.

const lista = [["JS", "Python"], ["Html", "Css"], ["React", "Node"]]

const [[, linguagem], [, estilizacao], [, framework]] = lista


console.log(linguagem)
console.log(estilizacao)
console.log(framework)
