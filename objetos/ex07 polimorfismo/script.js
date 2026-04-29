class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax = 120
            this.nome = "normal"
        } else if(tipo==2) {
            this.velMax = 160
            this.nome = "esportivo"
        } else if(tipo==3){
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("----------------------------")
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot = 0
        } else if(e==1){
            this.pot = 50
        } else if(e==2){
            this.pot = 75
        } else if(e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo, tipoInfo){
        super(4, estagioTurbo)
        this.tipoInfo = tipoInfo
        this.velMax = 300+this.turbo.pot
        this.nome = "Carro Especial"
    }
    info(){ // Esse info só vai aparecer sob uma condição:
        if(this.tipoInfo==1){ // Se o tipo info for igual a 1, ele vai mostrar o info da class Carro
            super.info
        } else{ // Se não, vai chamar a info da class CarroEspecial.
            console.log(`Nome...: ${this.nome}`)
            console.log(`Vel.Max...: ${this.velMax}`)
            console.log(`Turbo...: ${this.turbo.pot}`)
            console.log("----------------------------")
        }
    }
}

const c1 =new Carro(1,0)
const c2 = new Carro(1,1)
const c3 = new CarroEspecial(3, 0)

c1.info()
c2.info()
c3.info()