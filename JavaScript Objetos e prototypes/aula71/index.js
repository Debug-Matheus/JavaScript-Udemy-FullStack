//defineProperty -> Vai travar apenas uma propriedade do objeto
//defineProperties -> Vai travar varias propriedades do objeto

//Conseguindo alterar porque configurable está true e consigo criar uma nova propriedade com valoes alterados
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        value: estoque, // Valor da chave, se eu não passar fica como undefined
        writable: false,// pode alterar o valor ou não
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    })
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        value: estoque, // Valor da chave, se eu não passar fica como undefined
        writable: true,// pode alterar o valor ou não
        configurable : false
    })
    
}
const p1 = new Produto('Camiseta', 30, 3)
p1.estoque = 5
console.log(p1)
