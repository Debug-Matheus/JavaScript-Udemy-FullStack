async function carregarPerfil() {
    try {
        console.log("1. Buscando dados...");
        
        // O fetch retorna uma Promise, o await "abre o presente"
        const resposta = await fetch('https://github.com');
        
        // .json() também é assíncrono (Promise)
        const dados = await resposta.json(); 
        
        console.log("2. Dados recebidos:", dados.name);
        
        // Aqui você poderia usar uma biblioteca para salvar
        // await bancoLocal.salvar(dados);
        
    } catch (erro) {
        console.error("Ops! Algo deu errado na API:", erro);
    }
}
carregarPerfil();
console.log("3. Enquanto a API responde, eu posso carregar o resto da página!");
