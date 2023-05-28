function Calculadora(num1, num2){
const msg = "Resultado:"
    const soma = () =>{
       return `${msg} ${num1 + num2}`
    }
    const subtracao = () =>{
        return `${msg} ${num1 - num2}`
     }
     const multiplicacao = () =>{
        return `${msg} ${num1 * num2}`
     }
     const divisao = () =>{
        return `${msg} ${num1 / num2}`
     }
    return {
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao()
        //so podem ser acessados por meio do return,não da pra pegar a função só por ela existir. Ex: console.log(Calculadora(5,1).divisão())
    }
}
console.log(Calculadora(5,1))
