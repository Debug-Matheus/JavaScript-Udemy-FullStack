//defineProperty -> Vai travar apenas uma propriedade do objeto
//defineProperties -> Vai travar varias propriedades do objeto

// Exibindo os valores com Object.values e o for in
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        value: estoque, // Valor da chave, se não passar fica como undefined
        writable: false,// pode alterar o valor ou não
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    })
    
}
const p1 = new Produto('Camiseta', 30, 3)
console.log(Object.values(p1))

for(let valor in p1){
    console.log(p1[valor])
}
