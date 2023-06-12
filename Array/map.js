//o método map, alem de iterar todo o array, ele é muito bom para editar os dados do array

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
console.log(pedidos,"\n\n")
pedidos.map((element, i) => {//callback function
    //editando pedido
    if(element.id === 24){//se algum elemento id de dentro do objeto for identico a 24, o elemento LANCHE dele ira retornar como big mac(EDITANDO DADOS DO ARRAY)
        return (element.lanche = "big mac")
    }
    
})
console.log(pedidos)//era para aparecer tudo e o pedido editado mas n consigo acessar o array