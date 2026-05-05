console.log("1 - Começou o script");

async function ordemLogica() {
    console.log("2 - Dentro da função (antes do await)");
    
    // Aqui o JavaScript diz: "Vou dar uma pausa nessa função específica,
    // mas o resto do script pode continuar rodando lá fora!"
    await console.log("3 - No await (executa na hora)"); 
    
    console.log("5 - Depois do await (esperou o tempo de uma 'microtask')");
}

ordemLogica();

console.log("4 - Fora da função (quem disse que eu ia esperar?)");
