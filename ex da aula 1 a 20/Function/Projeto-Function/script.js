        let primeiroNumero = document.getElementById('inumber')
        let segundoNumero = document.getElementById('inumber2')
        let resposta = document.getElementById('res')
        
        function zerar(){
            primeiroNumero.value="";
            segundoNumero.value="";
            resposta.style.visibility = 'hidden';
            primeiroNumero.focus()
        }

        
        function somar(){
            
            let numero1 = Number(primeiroNumero.value);
            let numero2 = Number(segundoNumero.value);
            if(numero1 == "" || numero2 == ""){
                window.alert('Precisa digitar dois números')
                return
            }
            const resultado = numero1 + numero2;
            resposta.innerHTML = resultado;
            resposta.style.visibility = 'visible';
            primeiroNumero.value="";
            segundoNumero.value="";
            primeiroNumero.focus();
        }
        function subtrair(){
            
            let numero1 = Number(primeiroNumero.value);
            let numero2 = Number(segundoNumero.value);
            if(numero1 == "" || numero2 == ""){
                window.alert('Precisa digitar dois números')
                return
            }
            const resultado = numero1 - numero2;
            resposta.innerHTML = resultado;
            resposta.style.visibility = 'visible';
            primeiroNumero.value = "";
            segundoNumero.value = "";
            primeiroNumero.focus();
        }
        function multiplicar(){
            
            let numero1 = Number(primeiroNumero.value);
            let numero2 = Number(segundoNumero.value);
            if(numero1 == "" || numero2 == ""){
                window.alert('Precisa digitar dois números')
                return
            }
            const resultado = numero1 * numero2;
            resposta.innerHTML = resultado;
            resposta.style.visibility = 'visible';
            primeiroNumero.value = "";
            segundoNumero.value = "";
            primeiroNumero.focus();
        }
        function dividir(){
            let numero1 = Number(primeiroNumero.value);
            let numero2 = Number(segundoNumero.value);
            if(numero1 == "" || numero2 == ""){
                window.alert('Precisa digitar dois números')
                return
            }
            const resultado = numero1 / numero2;
            resposta.innerHTML = resultado.toFixed(2);
            resposta.style.visibility = 'visible';
            primeiroNumero.value = "";
            segundoNumero.value = "";
            primeiroNumero.focus();
        }