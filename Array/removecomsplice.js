let contatos = [
    {nome: "vidoca", tel: "(99) 99999 - 9999"},
    {nome: "mamãe", tel: "(99) 99999 - 9999"},
    {nome: "luquinha", tel: "(99) 99999 - 9999"},
    {nome: "amigos", tel: "(99) 99999 - 9999"},
]
console.table(contatos)


console.table(contatos.slice(0,2))//pegando DADOS ESPECIFICOS do array sem modifica-lo
console.table(contatos.splice(3,1))//removendo apenas o INDICE 3
