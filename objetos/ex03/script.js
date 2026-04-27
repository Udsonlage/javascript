class Pessoa{
    constructor(pnome,pidade){
        this.nome = pnome
        this.idade = pidade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("--------------------------")
    }
}

let pessoas = []

const botao = document.querySelector("#iadicionar")
const resultado = document.querySelector(".resultado")

botao.addEventListener("click", () => {
    const nome = document.querySelector("#inome")
    const idade = document.querySelector("#iidade")
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
})