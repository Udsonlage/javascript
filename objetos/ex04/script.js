class Carro{ // Class pai
    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }

}

class Blindado extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }

    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
    
}
const c1 = new Carro()
const c2 = new Blindado("BMW", 4, 100, 25)

c1.ligar()
c1.setCor("Azul")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)