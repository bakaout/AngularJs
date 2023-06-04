const violao = {
    cordas: "nylon",
    cor: "preta",
    adesivos: {
        adesivo1: "snoopy",
        adesivo2: " hora de aventura"
    }
}

//acessando valores de dentro do objeto
console.log(violao.adesivos)
console.log(violao.adesivos.adesivo1)
console.log(violao.adesivos.adesivo2)
console.log(`\nAs cordas do violao são da cor ${violao.cor} e seus adesivos são de dois personagens, o ${violao.adesivos.adesivo1} e o ${violao.adesivos.adesivo2}`)