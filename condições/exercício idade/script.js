
var botao = document.querySelector('#botao') 



function clicar() {

    var main = document.querySelector('#main')

    var nasc = document.querySelector('#inasc')
    var nascvalor = Number(nasc.value)
    var idade = 2026 - nascvalor 

    var masc = document.querySelector('#imasc')
    var fem = document.querySelector('#ifem')

    var resultado = document.querySelector('#resultado')

    var menino = document.querySelector('#imenino')
    var menina = document.querySelector('#imenina')

    var homem = document.querySelector('#ihomem')
    var mulher = document.querySelector('#imulher')

    var idoso = document.querySelector('#iidoso')
    var idosa = document.querySelector('#iidosa')
    console.log(idade)
    if ( idade < 15 && masc.checked) {
        
        main.style.height = '450px'
        resultado.innerHTML = `Você é um menino de ${idade} anos.`
        menino.style.display = 'block'
        menina.style.display = 'none'

    } else if ( idade <15 && fem.checked) {

        main.style.height = '450px'
        resultado.innerHTML = `Você é uma menina de ${idade} anos.`
        menino.style.display = 'none'
        menina.style.display = 'block'
    } else if (idade < 50 && masc.checked) {

        main.style.height = '450px'
        resultado.innerHTML = `Você é um homem de ${idade} anos.`
        homem.style.display = 'block'
    } else if (idade < 50 && fem.checked) {

        main.style.height = '450px'
        resultado.innerHTML = `Você é uma mulher de ${idade} anos.`
        mulher.style.display = 'block'
        homem.style.display = 'none'
        menina.style.display = 'none'
    } else if (idade > 51 && masc.checked) {

        main.style.height = '450px'
        resultado.innerHTML = `Você é um homem de ${idade} anos.`
        idoso.style.display = 'block'
    } else if (idade > 51 && fem.checked) {

        main.style.height = '450px'
        resultado.innerHTML = `Você é uma mulher de ${idade} anos.`
        idosa.style.display = 'block'
    }
}