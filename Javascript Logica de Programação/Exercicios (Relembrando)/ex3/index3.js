function processarEntrada(inputBruto) {
  try {
    if (typeof inputBruto !== 'string') {
      throw new Error("Entrada deve ser string.");
    }

    const valor = inputBruto.trim();

    if (valor === "") {
      throw new Error("Entrada vazia.");
    }

    return valor;
  } catch (err) {
    console.error("Erro:", err.message);
  }
}

console.log(processarEntrada());
console.log(processarEntrada());