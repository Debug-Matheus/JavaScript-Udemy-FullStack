//Getters e Setters
//Usando o defineProperty

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //Mostra a chave
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Not a number')
                return
            }
            estoque = valor
        },
        configurable : true //Posso criar novamente essa propriedade e alterar outros comandos
    });
}

const p1 = new Produto('Camiseta', 30, 3);
console.log(p1.estoque)
p1.estoque = 'a'
console.log(p1.estoque)
