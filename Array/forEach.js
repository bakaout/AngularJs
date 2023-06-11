const obj = [
    {
        nome: "joao"
    },
    {
        nome: "thais"
    },
]
obj.forEach((elemento, index) =>{
    if(elemento.nome === "joao"){//fazendo a mesma coisa do CONTINUE
        return console.log("O joão é lindo e namora")
    }
    console.log(index, elemento.nome)
})