//destructuring

const caderno = {//criando objeto
    qntd: "100 folhas",//propriedade e atributos
    folhas: "biodegradaveis",
    capas: [{ capa: "dura"}, {capa: "mole"}, {capa: "texturizada"}],
    secret: 5881
}

const {qntd, folhas = "não existe tipo de folhas", capas} = caderno//pegando as propriedade do objeto de outro jeito

console.log(qntd, folhas, capas[0])//imprimindo os objetos
//------------------
const {secret: hahaha} = caderno//escondendo o nome da variavel da senha
console.log(hahaha)//imprimindo novo nome da senha

