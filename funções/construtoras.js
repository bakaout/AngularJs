function Name(name, sobrenome){//criando função construtora
//this.name = "joao"
this.name = name

this.sobreNome = () => {
    const nomeCompleto = `${this.name}, ${sobrenome}`//pegando o nome e o sobrenome
    return nomeCompleto
}
}

const joao = new Name("João", "Victor")//chamando função construtora
//console.log(joao.name)//acessando o objeto direto
console.log(joao.sobreNome())//chamando a função que tem o nome completo