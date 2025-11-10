        const resposta = document.getElementById('res')
        const data = new Date() //Instanciou uma constate data com date
        function nomeMes(mes){
            let verificarMes;
            switch(mes){
                case 0:
                    verificarMes = 'Janeiro'
                    break
                case 1:
                    verificarMes = 'Fevereiro'
                    break
                case 2:
                    verificarMes = 'Março'
                    break
                case 3:
                    verificarMes = 'Abril'
                    break
                case 4:
                    verificarMes = 'Maio'
                    break
                case 5:
                    verificarMes = 'Junho'
                    break
                case 6:
                    verificarMes = 'Julho'
                    break
                case 7:
                    verificarMes = 'Agosto'
                    break
                case 8:
                    verificarMes = 'Setembro'
                    break
                case 9:
                    verificarMes = 'Outubro'
                    break
                case 10:
                    verificarMes = 'Novembro'
                    break
                case 11:
                    verificarMes = 'Dezembro'
                    break
                default:
                    verificarMes = 'Mês inválido'
            }
            return verificarMes
        }

        function zeroaEsquerda(num){
            return num < 10 ? `0${num}`: num
        }
        function diaSemana(dia){
            let verificarDia;
            switch(dia){
                case 0:
                    verificarDia = 'Domingo'
                    break
                case 1:
                    verificarDia = 'Segunda-Feira'
                    break
                case 2:
                    verificarDia = 'Terça-Feira'
                    break
                case 3: 
                    verificarDia = 'Quarta-feira'
                    break
                case 4:
                    verificarDia = 'Quinta-Feira'
                    break
                case 5:
                    verificarDia = 'Sexta-Feira'
                    break
                case 6:
                    verificarDia = 'Sábado'
                    break
                default:
                    verificarDia = 'Dia inválido'    
            }
            return verificarDia
        }
        function criarData(data){
            
            const dataDiaNumero = data.getDay() //Passou pra outra constante o date em dia numero
            const dataDiaTexto = diaSemana(dataDiaNumero) // Chamou a função que tranformar dia em numero para dia em texto

            //Mesma situação de cima
            const dia = data.getDate()
            const mesNumero = data.getMonth()
            const mesTexto  = nomeMes(mesNumero)
            
            //Hora + função zero a esquerda
            const hora = zeroaEsquerda(data.getHours())
            const min = zeroaEsquerda(data.getMinutes())

            const dataAtual = `${dataDiaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${hora}: ${min}`
            return dataAtual;
        }
        const agora = criarData(data)
        resposta.innerHTML = agora;
        