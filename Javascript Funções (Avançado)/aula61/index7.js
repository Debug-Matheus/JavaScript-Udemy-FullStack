function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}
function* gerador4(){
    yield* gerador3()
    yield 3;
    yield 4;
    yield 5;
}
const g4 = gerador4()
for(let valor of g4){
    console.log(valor)
}
