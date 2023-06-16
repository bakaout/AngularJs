//textContent => retorna o texto COM formatação
//innerText => retorna somente o texto
"use strict"
const p = document.querySelector("p")
console.log(p.innerText)
console.log(p.textContent)

//não da pra adicionar html dentro deles, apenas texto crus
p.textContent = "fadgd agf"
