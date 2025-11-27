function criarHoraSegundo(segundos){
            const data = new Date(segundos * 1000) // 1000ms = 1s
            return data.toLocaleTimeString('pt-BR',{
                timeZone:'UTC' //Está considerando 01 de janeiro de 1970 00:00:00
            });
        }
        // console.log(criarHoraSegundo(10)) // 00:00:10

        const paragrafo = document.querySelector('.paragrafos p');
        let segundos = 0;
        let timer;

        function iniciaRelogio(){
            timer = setInterval(function(){
                segundos++
                paragrafo.innerHTML = criarHoraSegundo(segundos)
            },1000)
            
        }
        function iniciar(){
            clearInterval(timer)
            iniciaRelogio()
            paragrafo.style.color = 'black'
        }

        function pausar(){
            clearInterval(timer)
            paragrafo.style.color = 'red'
        }
        
        function zerar(){
            clearInterval(timer)
            paragrafo.innerHTML = '00:00:00'
            segundos = 0;
            paragrafo.style.color = 'black'
            
        }