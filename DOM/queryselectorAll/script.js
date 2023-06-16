"use strict"
//selecionando todos as tags P da pagina
const p = document.querySelectorAll("p")

p.forEach((element, index) =>{//estrutura de repetição para arrays

    if(index === 0){
        element.style.background = "#a3b"
    }

    p[1].innerText += " e atraente"//adicionando texto no paragrafo
    console.log(element)
})
