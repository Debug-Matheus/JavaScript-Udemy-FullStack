async function carregarTudoLento() {
    // Demora 2s
    const perfil = await buscarPerfil(); 
    
    // Só começa DEPOIS dos 2s acima e demora mais 2s
    const fotos = await buscarFotos(); 
    
    console.log("Total: 4 segundos");
}
async function carregarTudoRapido() {
    // Dispara as duas ao mesmo tempo! 
    // Elas começam a rodar AGORA, em paralelo.
    const promessaPerfil = buscarPerfil(); 
    const promessaFotos = buscarFotos(); 

    // Agora que as duas já estão correndo, eu espero os resultados
    const perfil = await promessaPerfil;
    const fotos = await promessaFotos;

    console.log("Total: 2 segundos (as duas rodaram juntas!)");
}

carregarTudoLento();
carregarTudoRapido();
