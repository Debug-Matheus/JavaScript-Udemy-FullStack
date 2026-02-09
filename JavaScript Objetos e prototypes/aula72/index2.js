//Getters e Setters
//Usando o defineProperty

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new Error('Not a number')
                return
            }
            estoquePrivado = valor
        },
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    });
}
function verificarEstoque(valor){
    if(typeof valor !== 'number'){
        throw new Error('Not a number')
        return
    }
    return valor  

}
try{
    const p1 = new Produto('Camiseta', 30, verificarEstoque(3));
    console.log(p1.estoque)
    p1.estoque = 11
    console.log(p1.estoque)//Só vai executar se não tiver erro
}catch(e){
    console.log(e.message)
}finally{
    console.log('Fim...')
}   




