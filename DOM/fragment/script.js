"use strict"
/*para que serve o fragment? Ele é um fragmento do dom usado para ganhar performance e otimizar melhor o código, a utilização dele serve para deixar a aplicação mais leve*/


const ul = document.querySelector("ul")

const familia = ["Mãe", "Lucca", "Giovanni", "Vó", "Thais"]
const frag = document.createDocumentFragment()//criando um fragmento do DOM

familia.forEach((element) => {//pegando todos os nós
    const li = document.createElement("li")//criando um elemento LI
    li.textContent = element//colocando os li´s no element em repetição
    frag.append(li)//colocando a li na memoria do fragment
})

ul.append(frag)//puxando o fragment(que esta com a li) para dentro da UL 
console.log(ul)