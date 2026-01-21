function* geradora1(){
    //Codigo qualquer
    yield 'Valor 1';
    //Codigo qualquer
    yield 'Valor 2';
    //Codigo qualquer
    yield 'Valor 3';
}
const g1 = geradora1();
for(let valor of g1){
    console.log(valor)
}