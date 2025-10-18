//Referência (mutável) - array, object, function

let a = [1,2,3];
let b = a;
console.log(a,b)
b.push(5)
console.log(a,b)
let c = b
console.log(a,b,c)