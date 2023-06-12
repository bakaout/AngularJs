//verifica se apenas 1 dos valores dos elementos é igual ao valor da sua condição
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

existeLanche = pedidos.some((element) => {//callback function
    return element.lanche === "tasty"
})
console.log(existeLanche)//sim, existe um atributo com o valor "tasty"