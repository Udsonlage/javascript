const div_data = document.getElementById('divData')
const div_hora = document.getElementById('divhora')
const horaDoAlarme = document.getElementById("copyAlarme")
const inputNumero = document.getElementById("inumero")
const botaoAtivar = document.getElementById("btnAtivar")

let timestampAtual = null
let timestampAlarme = null
let alarmeAtivado = false
let alarmeTocando = false

botaoAtivar.addEventListener("click",()=>{
    timestampAtual = Date.now()
    timestampAlarme = timestampAtual + (inputNumero.value * 1000)
    alarmeAtivado = true
    const dataAlarme = new Date(timestampAlarme)
    horaDoAlarme.innerHTML = `Hora do Alarme:${dataAlarme.toLocaleTimeString()}`
})


// Tempo rolando em tempo real
const tempoRolando =()=>{
    const data = new Date()
    div_data.innerHTML = data.toLocaleDateString()
    div_hora.innerHTML = data.toLocaleTimeString()
}
const tempo = setInterval(tempoRolando,100)

const data = new Date()