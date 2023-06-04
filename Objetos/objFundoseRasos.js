const copo = {
    tamanho: "G",
    cor: "amarelo",
    personagem: "minions"
}
//clones rasos de objeto
/*let copo1 = copo
let copo2 = {
    ...copo,
    ...copo1
}
console.log(copo, copo1)*/


//clones fundo de objetos (gambiarra para clonar objetos a fundo)
let cup = JSON.stringify(copo)//transformando o objeto em string
cup = JSON.parse(cup)//transformando a string em objeto
console.log(cup)

