//objetos a fundo

let presente = {//criando um objeto
    tenis: {//criando um objeto dentro do objeto
        marca: "puma",//criando as propriedades do objeto, ou seja os atributos ou valores
        tipo: "suede",
        cor: "preto com detalhe bege",
        textura: "camurça",
        valor: 300
    },
    blusa: {//criando um objeto dentro do objeto
        marca: "trust",//criando as propriedades do objeto, ou seja os atributos ou valores
        tipo: "moletom",
        cor: "bege com letra preta",
        textura: "algodão ovelha",
        valor: 100
    },
    arrayApelidos: ["isy", "vidoca", "meu bem"],
    arrayApelidosObj: [//criando um array de objetos
        {
            apelido: "isy"
        },
        {
            apelido: "vidoca"
        },
        {
            apelido: "meu bem"
        },
    ],
    
    /*getMarca: (parametro) => {
        return this.arrayApelidosObj[parametro].apelido
    },*/
}
console.log(presente.tenis)
console.log(presente.blusa)