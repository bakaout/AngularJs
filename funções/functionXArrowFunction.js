const lanches = {//array com objetos dentro
    Cardapio: [
        {nome: "bolo fofo", preço: "6"},//indice 1
        {nome: "toddynho", preço: "30"}//indice 2
    ],

    meupedido: function(select){
        //o this no metodo function declaration pega o conte9xto pai que nesse caso seria o lacnhes, ou pega o contexto global que no caso dos navegadores é o window. ex: na teoria fica console.log(lanches.cardapio[select]))
        return console.log(this.Cardapio[select])// se o this não tiver um pai, ele vai ser global
    },
    meupedidoarrow: (select) => {
        //o this do arrowfunction não sai pra fora do contexto dele, ele só se refere as propriedades que estão dentro dele
        this.Cardapio = [
            {nome: "amo muito a isy", preço: "100%"},//indice 1
            {nome: "amo muto minha mãe", preço: "100%"},//indice 2
        ]
        return console.log(this.Cardapio[select])
    },
    meupedidotimeout: function(){
        setTimeout(function(){
            console.log(this.Cardapio)
            console.log(this)
            //.bind(this) esta fazendo com que o contexto lanches seja acessivel aqui de dentro do aninhado de funções
        }.bind(this), 1000)
    }
}



lanches.meupedido(1)
lanches.meupedidoarrow(0)
lanches.meupedidotimeout()

//OBS: não é possivel ter um construtor na função arrow, use na declaration