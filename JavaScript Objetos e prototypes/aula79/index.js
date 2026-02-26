//POLIMORFISMO

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} / ${this.conta} | `  + 
     `Saldo: R$ ${this.saldo.toFixed(2)}`
    )
}
// const conta1 = new Conta(11,22, 10)
// console.log(conta1)
// conta1.depositar(5)
// conta1.depositar(10)
// conta1.sacar(24)
// conta1.sacar(5)

function Corrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia,conta,saldo)
    this.limite = limite
}
Corrente.prototype = Object.create(Conta.prototype)
Corrente.prototype.constructor = Corrente
Corrente.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Corrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
const contaCorrente = new Corrente(11,22,0, 100)
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(10)

console.log('=====================')

function Poupanca(agencia,conta,saldo){
    Conta.call(this, agencia,conta,saldo)
}
Poupanca.prototype = Object.create(Conta.prototype)
Poupanca.prototype.constructor = Poupanca

const contaPoup = new Poupanca(11,22, 0)
contaPoup.depositar(10)
contaPoup.sacar(10)
contaPoup.sacar(1)