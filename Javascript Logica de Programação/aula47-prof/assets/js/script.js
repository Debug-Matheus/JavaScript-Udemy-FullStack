function relogio(){
            function criarHoraSegundo(segundos){
                const data = new Date(segundos * 1000) // 1000ms = 1s
                return data.toLocaleTimeString('pt-BR',{
                    timeZone:'UTC' //Está considerando 01 de janeiro de 1970 00:00:00
                });
            }
        // console.log(criarHoraSegundo(10)) // 00:00:10

            const relogio = document.querySelector('.paragrafos p');
            const iniciar = document.getElementById('iniciar')
            const pausar = document.getElementById('pausar')
            const zerar = document.getElementById('zerar')
            let segundos = 0;
            let timer;
            function iniciaRelogio(){
                timer = setInterval(function(){
                    segundos++
                    relogio.innerHTML = criarHoraSegundo(segundos)
                },1000)
                
            }
            document.addEventListener('click', function(e){
                const el = e.target

                if(el.id === 'iniciar'){
                    clearInterval(timer)
                    iniciaRelogio()
                    relogio.classList.remove('pausado')
                }
                if(el.id === 'pausar'){
                    clearInterval(timer)
                    relogio.classList.add('pausado')
                }
                if(el.id === 'zerar'){
                    clearInterval(timer)
                    relogio.innerHTML = '00:00:00'
                    segundos = 0;
                    relogio.classList.remove('pausado')
                }
            })
        }
        relogio()
        