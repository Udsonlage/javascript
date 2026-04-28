class Npc{
    static alerta = false //propriedade. para chamar ele, é só usar Npc.alerta = true ou false.
    constructor(energia){
        this.energia = energia
    }
    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`alerta: ${Npc.alerta}`)
        console.log(`alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log(`-----------------`)
    }
    static alertar = function(){ //Foi criado um método pra dar true
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

//Npc.alerta = true
Npc.alertar() //método chamado para dar true

npc1.info()
npc2.info()
npc3.info()