//o FILTER filtra todos, desde o primeiro até o ultimo, ja o FIND filtra apenas o primeiro
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
const filtrando = pedidos.filter((element, index)/*callback function*/ => {
    return element.bedida === "suco de laranja"
})
console.log(filtrando)