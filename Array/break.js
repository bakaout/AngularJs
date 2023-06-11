const obj = [
    {
        nome: "abner"
    },
    {
        nome: "carlos"
    },
    {
        nome: "thais"
    },
    {
        nome: "biel"
    },
    {
        nome: "joao"
    },
]

for(let i of obj){
    /*if(i.nome === "carlos"){
        continue;
    }*/

    if(i.nome === "thais"){
        console.log("É o mozãoooo")
        break;
    }
    console.log(i)
}