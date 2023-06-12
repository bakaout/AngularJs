//pega apenas UM item, o primeiro valor do array

const pedidos = [
    {
        id: 24, nome: "thais", lanche: "tasty", bedida: "suco de laranja"
    },
    {
        id: 29, nome: "grazi", lanche: "big mac", bedida: "suco de laranja"
    },
    {
        id: 11, nome: "joao", lanche: "cheddar mcMelt", bedida: "guarana"
    }
]
const encontrando = pedidos.find((element, index) => {
    return element.bedida === "suco de laranja"
})
console.log(encontrando)