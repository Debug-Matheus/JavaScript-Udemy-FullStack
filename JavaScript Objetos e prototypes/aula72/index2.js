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
                console.log('Not a number')
                return
            }
            estoquePrivado = valor
        },
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    });
}
const p1 = new Produto('Camiseta', 30, 3);
p1.estoque = 11
console.log(p1.estoque)

