const apiResponse = {
    status:200,
    data:{
        user:{
            nome:"Julia",
            idade: 22,
            endereco: {
                rua: "Rua das Flores",
                numero: 99
            }
        }
    }
}
const {data:{user:{nome, idade, endereco:{rua}}}} = apiResponse

console.log(nome,idade,rua)