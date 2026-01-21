function* geradora1(){
    //Codigo qualquer
    yield 'Valor 1';
    //Codigo qualquer
    yield 'Valor 2';
    //Codigo qualquer
    yield 'Valor 3';
}
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}
const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
