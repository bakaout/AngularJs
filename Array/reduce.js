//pega todos os valores do array e condensa em um só valor, podendo assim fazer operações e muito mais
const pedidos = [
    {
        id: 24,
        nome: "thais",
        lanche: "tasty",
        bedida: "suco de laranja",
        preco: 33,
    },
    {
        id: 29,
        nome: "grazi",
        lanche: "big mac",
        bedida: "suco de laranja",
        preco: 30,
    },
    {
        id: 11,
        nome: "joao",
        lanche: "cheddar mcMelt",
        bedida: "guarana",
        preco: 37,
    },
]
caixa = pedidos.reduce((total, element) => {/*callback function do REDUCE(algumas funções tem um tipo especifico de callback)*/

    return total + element.preco
    
}, 0/*aqui fica o contador do reduce*/)

console.log(caixa)