//CURTO CIRCUITO COM || E FALSY

function falaOi(){
    return 'Oi'
}
const vaiExecutar = 0;
console.log(vaiExecutar || falaOi())

console.log(0 || undefined || "" ||"Matheus"|| true || 'Luiz')