//Manipulando prototypes
//A construção de um objeto literal, gera automaticamente um construtor: 
//new Object -> Isso serve para array, string, boleano, Date
//Função construtora tem um objeto linkado a ela chamado prototype:
//new Object -> Object.prototype

//Não é recomendado mexer com a propriedade __proto__
const objA = {
    chaveA: 'A'
    //__proto__ -> Isso vem no navegador implicitamente dentro do objeto literal objA -> Object.prototype e termina aqui
    //objA.__proto__ === Object.prototype -> true -> __proto__ do objA continua apontando para Objet.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__ -> Isso vem no navegador implicitamente dentro do objeto literal objB -> Object.prototype e termina aqui
    //Quero que __proto__ do objB aponte para objA -> __proto__: objA -> Isso faz ter acesso as chaves do objA
};
const objC = new Object
objC.chaveC = 'C'
//Quero que __proto__ do objC aponte para objB -> __proto__: objB
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)


console.log(objB.chaveA)
console.log(objC.chaveA)
console.log(objC.chaveB)


