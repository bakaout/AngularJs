/*
é uma condição booleana e funciona da seguinte forma: se o array
tiver apenas o valor fornecido na condição, vai dar true, mas se tiver outros valores alem daquele da condição, vai dar false
*/
const pedidos = [
    {
        id: 24, nome: "thais", lanche: "tasty", bedida: "suco de laranja"
    },
    {
        id: 29, nome: "grazi", lanche: "big mac", bedida: "suco de laranja"
    },
    {
        id: 11, nome: "joao", lanche: "cheddar mcMelt", bedida: "guarana"
    },
]

temSuco = pedidos.every((element) => {//callback function
    return element.bedida === "suco de laranja"
})
console.log(temSuco)//vai dar false porque no atributo bebida tem tres valores diferentes, mas se tivesse só "suco de laranja" nos tres, daria true