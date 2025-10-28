let h1 = document.querySelector('h1')
        window.alert('Bom dia')
        let beber = window.confirm("Vai beber hoje?")
        let nome = window.prompt('Digite seu nome')
        if (beber == true){
            h1.innerHTML = `Seu nome é ${nome}, e você vai beber hoje`
        }else{
            h1.innerHTML = `Seu nome é ${nome}, e você não vai beber hoje`
        }