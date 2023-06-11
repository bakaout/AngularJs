const array = [10, 30, 20, 40, 100, 50]
const letras = ["a", "b", "d", "c", "e", "f", "h", "g"]

console.log(letras.sort())//para ordenar caracteres


console.log(array.sort((a, b) => a - b))//para ordenar numeros, utilize sempre esta arrow function junto ao sort()


console.log(array.sort((a, b) => b - a))//para reverter a ordem dos números


console.log(array.sort((a, b) => a - b).reverse())//outra das formas de reverter a ordem dos números



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

console.log(obj.sort((a, b) => a.nome.localeCompare(b.nome)))//comparando strings para coloca-las em ordem alfabetica



