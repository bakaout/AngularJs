let caneta = {
    cor: [
        "azul",
        "verde",
        "vermelha"
    ],
    ponta: "fina"
}

console.log(caneta.cor)

canetaClone = caneta//clonando o objeto CANETA na variavel CANETACLONE
console.log(canetaClone)

let lapis = {grafite: "preto", marca: "faber"}

let canetaLapis = Object.assign(caneta, lapis)//mesclando os objetos CANETA E LAPIS 
console.log(canetaLapis)

let canetaLapis2 = { ...caneta, ...lapis}//outra forma de mesclar
console.log(canetaLapis2)