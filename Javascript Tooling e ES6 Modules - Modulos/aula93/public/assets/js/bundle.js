/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//linha 1
//linha 2
//linha 3
console.log('EIIIIIIIIIIIIIIIIIIIIII');
var produtos = [{
  nome: 'Teclado',
  preco: 200
}, {
  nome: 'Mouse',
  preco: 100
}];
var produtosComDescontos = produtos.map(function (prod) {
  prod.preco = prod.preco * 0.9;
});
console.log(produtos);
/******/ })()
;
//# sourceMappingURL=bundle.js.map