function Calculadora(){
  

    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')

    this.inicia = function(){
      this.cliqueBotoes()
      this.pressionaEnter()
      this.pressionaBackSpace()
    }
    this.pressionaEnter = function(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.realizaConta()
        }
      });
    }
    this.pressionaBackSpace = function(){
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    }
    this.pressionaBackSpace = function(){
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    }
    this.realizaConta = function(){

      try {
        const conta = eval(this.display.value);

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    }
    this.btnParaClear = function(){ 
      this.display.value =''
    }
    this.btnParaDel = function(){
      this.display.value = this.display.value.slice(0, -1)
    }
    this.cliqueBotoes = function(){
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
    }
    
    
    this.btnParaDisplay = function(valor){
      this.display.value += valor
    }
  };
const calculadora = new Calculadora();
calculadora.inicia()

