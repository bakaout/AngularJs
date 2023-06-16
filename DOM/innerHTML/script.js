//innerHTML = retorna o texto com formatação e elementos html
//createELement => Cria um elemento HTML
"use strict"
const div = document.querySelector("div")

//adicionando texto e elementos HTML
div.innerHTML = `${div.innerHTML}<strong>Esse é o meu texto alterado</strong>`
/*---------------------------------------------- */

const criandoUL = document.createElement("ul")//criando uma ul no dom
const lista = [1,2,3]
lista.forEach((element) => {//fazendo uma repetição(3 vezes)
    const criandoLI = document.createElement("li")//criando uma li
    criandoLI.innerHTML = element//colocando o conteudo da lista(1, 2, 3) dentro da li
    criandoUL.appendChild(criandoLI)//colocando a li dentro da ul
});
div.appendChild(criandoUL)//colocando a ul criada como filha da div(ul dentro da div)
console.log(criandoUL)