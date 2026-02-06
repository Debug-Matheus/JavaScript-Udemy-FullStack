//defineProperty -> Vai travar apenas uma propriedade do objeto
//defineProperties -> Vai travar varias propriedades do objeto

//Tentando deletar uma chave caso o configurable esteja true
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        value: estoque, // Valor da chave, se eu não passar fica como undefined
        writable: false,// pode alterar o valor ou não
        configurable : false //Posso também deletar uma chave caso esteja true
    })
    
}
const p1 = new Produto('Camiseta', 30, 3)
p1.estoque = 5
delete p1.estoque
console.log(p1)
