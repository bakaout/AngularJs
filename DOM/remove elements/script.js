"use strict"
const h2 = document.querySelector("h2")
h2.remove()//removendo o h2 da pagina

const li = document.querySelectorAll("li")
li[2].remove()//removendo o segundo indice e o terceiro elemento LI
console.log(li)