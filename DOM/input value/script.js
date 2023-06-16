"use strict"
const input = document.querySelector("#name")
console.log(input.value)

setInterval(() =>{
    const muda = input.value = "joaozinho edições html"
    console.log(muda)
}, 1000/*um segundo*/)