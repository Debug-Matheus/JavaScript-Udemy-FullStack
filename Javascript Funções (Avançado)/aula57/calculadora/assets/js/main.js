function criaCalculadora(){
  return {

    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.realizaConta()
        }
      });
    },
    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },
    btnParaClear(){
      this.display.value =''
    },
    btnParaDel(){
      this.display.value = this.display.value.slice(0, -1)
    },
    cliqueBotoes(){
      document.addEventListener('click',e =>{
        const el = e.target
        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText)
        }
        if(el.classList.contains('btn-clear')){
          this.btnParaClear()
        }
        if(el.classList.contains('btn-del')){
          this.btnParaDel()
        }
        if(el.classList.contains('btn-eq')){
          this.realizaConta()
        }
        this.display.focus()
      });
    },
    
    
    btnParaDisplay(valor){
      this.display.value += valor
    }
  }
};
const calculadora = criaCalculadora();
calculadora.inicia()

