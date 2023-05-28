/* o strictmode elimina alguns erros silenciosos que passariam batido do javaScript e os faz emitir erros, alem disso melhora na otmização por achar os erros escondidos */

"use strict"//acusando o erro qu se encontra na linha 5(variavel não declarada e usada fora do escopo)
(function(){
    teste = "teste123"
})()
console.log(teste)