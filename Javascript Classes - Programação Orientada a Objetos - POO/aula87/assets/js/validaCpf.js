// 705.484.450-52 070.987.720-03

/*Pontos de Atenção
Encapsulamento: Ao adicionar chaves diretamente com this, elas se tornam propriedades públicas e mutáveis.

Métodos no Protótipo: Se você adicionar a propriedade no constructor, ela será criada para cada nova instância, o que é correto para dados únicos de cada objeto (como CPF ou preço).

Sintaxe de Colchetes: Se o nome da chave for dinâmico (ex: o nome da chave depende de outra variável), use this[variavelNomeChave] = valor;. 

Quando você usa this.novoChave = valor, você está instruindo o JavaScript a:
- Criar uma nova propriedade chamada novoChave no objeto atual (se ela ainda não existir).
- Atribuir o resultado da expressão ao valor dessa chave. 
*/
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.éSequência()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

// let validacpf = new ValidaCPF('070.987.720-03');
// // validacpf = new ValidaCPF('999.999.999-99');

// if (validacpf.valida()) {
//   console.log('CPF válido');
// } else {
//   console.log('CPF inválido');
// }
