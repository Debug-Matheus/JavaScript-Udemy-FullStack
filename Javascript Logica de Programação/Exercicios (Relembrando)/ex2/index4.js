const endereco = {
    rua: "Av Brasil",
    numero: 500,
    local:{
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
}
const {local: {cidade, estado}} = endereco
console.log(cidade,estado)