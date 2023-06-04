//verificação de existência de propriedade e valor
const copo = {
    tamanho: "G",
    cor: "amarelo",
    personagem: "minions"
}
if(copo.hasOwnProperty("tamanho")){//verifica se existe a propriedade tamanho no objeto copo
    console.log("Ainda tem o tamanho G")
}else{
    console.log("Não temos o tamanho G")
}