/*
toLowerCase() = deixa toda a string no diminutivo
replaceAll(" ", "")= troca todos os espaços vazios por "sem nada de espaço"
*/
const palavra = "joao fff".toLowerCase().replaceAll(" ", "")
let letras = {}/*criando um array*/

/*enquanto o indice for menor que o tamanho da palavra: continuar*/
for(let i = 0; i < palavra.length; i++){
    /*verificando se as letras existem, se exitirem o programa continua*/
    if(letras[palavra[i]]){
        /*se as letras se repetirem o programa soma mais um*/
        letras[palavra[i]]++
    }else{
        /*se as letras NÃO se repetirem, o programa adiciona apenas um ao valor da letra*/
        letras[palavra[i]] = 1
    }
    
}
console.log("palavra: ",palavra,"\nrepetidas: ",letras)
