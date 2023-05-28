function Calculadora(num1, num2){//função contrutora
    this.soma = () => {
        return `${num1 + num2}`
    }
    this.subtracao = () => {
        return `${num1 - num2}`
    }
}
const calc = new Calculadora(1,4)//chamando a função contrutora na variavel calc
console.log(calc.subtracao())//puxando a função de subtração pela const calc que virou uma contrutora 