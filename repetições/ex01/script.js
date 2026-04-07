var inicio = document.querySelector('#iinicio')
var fim = document.querySelector('#ifim')
var passo = document.querySelector('#ipasso')
var res = document.querySelector('#res')
function clicar() {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (i == "" || f == "" || p == "") {
        res.innerHTML = 'Preencha os dados!'
    } else {

        res.innerHTML = 'Contando:<br>'
        for(var c = i;c <= f;c += p) {
            
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += "\u{1F3C1}"
    }
        
}