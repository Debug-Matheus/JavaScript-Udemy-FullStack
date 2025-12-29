const conta = {
    banco: "Nubank",
    numero: 12345,
    dono:{
        nome:"Lucas",
        idade:28
    }
}
const {banco:b, limite = 500, dono:{idade:i}} = conta
console.log(b,limite, i)