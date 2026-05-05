async function carregarDados() {
    // O fetch() é uma função do navegador que RETORNA uma Promise
    const resposta = await fetch('https://exemplo.com'); 
    const dados = await resposta.json(); // .json() também retorna Promise
    console.log(dados);
}


async function salvarNoBanco(usuario) {
    // O .create() do banco de dados retorna uma Promise
    const resultado = await db.usuario.create(usuario);
    return resultado;
}
