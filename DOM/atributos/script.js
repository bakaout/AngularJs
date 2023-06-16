"use strict"
/*setAttribute("aqui fica o atributo", "e aqui o valor/nome do atributo")*/
const p = document.querySelector("div")
p.setAttribute("id", ">.<")

p.setAttribute("class", "valor")//adicionando atributo class e valor na div
p.setAttribute("class", `${p.getAttribute/*pega todos os atributos do tipo a seguir e coloca no elemento(div)*/("class")} valorzinho`)
console.log(p)

//REMOVENDO
p.removeAttribute("id")