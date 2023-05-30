//Propriedades, metrodos e valores

//propriedades e valores
//criando função que retorna um objeto
function tenis(tamanho, marca, tipo, estoque) {
    return {
        tamanho: tamanho,
        marca: marca,
        tipo: tipo,
        estoque: estoque,
    }
}
console.log(tenis(39, "suede", "suede", true, "\n\n\n"))//dando valores(atributos) ao obejto

//-----------------------
//metodos e valores
const blusa = {
    getTamanho(){//função suggar(o jeito mais simplificado possivel)
        return 35
    }
}
console.log(blusa.getTamanho())//acessando o valor da função
