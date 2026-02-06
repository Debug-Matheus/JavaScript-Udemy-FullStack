//defineProperty -> Vai travar apenas uma propriedade do objeto
//defineProperties -> Vai travar varias propriedades do objeto

//Usando o defineProperties
function Produto(nome,preco,estoque){
    
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        value: estoque, // Valor da chave, se não passar fica como undefined
        writable: false,// pode alterar o valor ou não
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    })
    Object.defineProperties(this,{
        nome: {
            enumerable:true, 
            value: nome, 
            writable: false,
            configurable : true 
        },
        preco:{
            enumerable:true, 
            value: preco, 
            writable: false,
            configurable : true 
        }
    })
}
const p1 = new Produto('Camiseta', 30, 3)

