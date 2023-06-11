const array = [1, 2, 3, 4, 5, 6]
const obj = [
    {
        nome: "abner"
    },
    {
        nome: "carlos"
    },
    {
        nome: "biel"
    },
    {
        nome: "joao"
    },
    {
        nome: "thais"
    },
]

for(let i of array){//bom para trabalhar com tudo(for of)
    console.log(i)
}

for(let name of obj){//repete até o array acabar
    console.log(name)//acessando todos os indices de dentro do array
}


const object = { namorado: "joao", namorada: "thais"}
//BOM SOMENTE PARA O USO DE OBJETOS(for in)
for(let i in object){
    console.log(object)
}