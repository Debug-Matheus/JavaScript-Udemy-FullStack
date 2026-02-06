//defineProperty -> Vai travar apenas uma propriedade do objeto
//defineProperties -> Vai travar varias propriedades do objeto

//Comparando Object keys que retorna as chaves em array e o for in que retorna normal, mas o enumerable está false então não vai aparecer as chaves
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable:false, //Mostra a chave
        value: estoque, // Valor da chave, se não passar fica como undefined
        writable: false,// pode alterar o valor ou não
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    })
    
}
const p1 = new Produto('Camiseta', 30, 3)
console.log(Object.keys(p1))
