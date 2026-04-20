/*function multiplicacao(n1, n2) {
    return n1*n2
}

let multi = multiplicacao(4, 3)
console.log(multi)


function parimpar(n) {
    if (n%2 == 0) {
        console.log('Par')
    } else {
        console.log('Impar')
    }
}

let parimpa = parimpar(10)



function soma(n1=0, n2=0) {
    return n1+n2
}

let s = soma(2121, 102983)
console.log(s)

function idade(ano, nasc) {
    return ano - nasc
}

let nasc = idade(2026, 1910)
console.log(nasc)

const dobro = (n) => n * 2;

console.log(dobro(200))

let lista = []

function isNumero(n) {
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar(n) {
    if (isNumero(n) == true) {
        lista.push(n)
        console.log(`Número ${n} adicionado!`)
    } else {
        console.log('Valor inválido!')
    }
}

function finalizar() {
    if (lista.length == 0) {
        console.log('Adicione valores antes de finalizar!')
    } else {
        let total = lista.length
        console.log(`a lista tem ${total} valores`)
    }
}

adicionar(23)
adicionar(5)
console.log(lista)
finalizar()

let boletim = []

function notaValida(n) {
    if(n >= 0 && n <= 10) {
        return true
        //console.log('tudo certo')
    } else {
        return false
        //console.log('Não ta certo')
    }
}

function cadastrarNota(n) {
    if (notaValida(n) == true) {
        boletim.push(n)
        console.log(`Nota ${boletim} cadastrada!`)
    } else {
        console.log('Nota inválida, Digite de 0 a 10')
    }
}

function calcularMedia() {
    let soma = 0
    for(let pos in boletim) {
        soma += boletim[pos]
    }

    let media = soma / boletim.length
    return media // TINHA ESQUECIDO DE RETORNAR PARA A VARIÁVEL APARECER PARA A FUNCTION ABAIXO.
}

function gerarRelatorio() {
    if (boletim.length == 0) { //para fazer essa comparação, precisamos usar .length (se a quantidade de elementos no array for igual a 0...) para o js conseguir entender
        console.log('Não é possível gerar relatório')
    } else {
        let m = calcularMedia()

        if (m >= 7) {
            console.log(`A média da turma: ${m.toFixed(2)}. Status: ACIMA DA MÉDIA`) //toFixed limita o número para aparecer em apenas duas casas decimais.
        } else {
            console.log(`A média da turma: ${m.toFixed(2)}. Status: ABAIXO DA MÉDIA`)
        }
    }
}

cadastrarNota(10)
cadastrarNota(10)
cadastrarNota(10)
calcularMedia()
gerarRelatorio()

////////////////////////////


let soma = (n1, n2) => n1 + n2;

console.log(soma(10, 2))

///////////////////////////////

let inventario = []

function estoqueValido(quantidade) {
    if (quantidade >= 1) {
        
        return true
    } else {
        return false
    }
}

function adicionarProduto(nome, qtd) {
    if (estoqueValido(qtd) == true) {
        inventario.push({nome: nome, qtd: qtd})
        console.log(`item ${nome} adicionado!`)
    } else {
        console.log(`Quantidade inválida!`)
    }
    
}

function resumoEstoque() {
    let res = 0

    for(let i in inventario) {
        res += inventario[i].qtd
    }

    console.log(`Resumo do Estoque`)
    console.log(`Total de produtos em peças: ${res}`)
    


}

adicionarProduto("macarrão", 10)
adicionarProduto("feijão", 5)

resumoEstoque()

//////////////////////////////

let candidatos = [{nome: 'Ana', nota: 5}, {nome: 'joão', nota: 5}]

function foiAprovado(nome, nota) {
    if (nota >= 7) {
        return true
    }
}

function gerarListAprovados() {

    if (foiAprovado(nota) === true) {
    let i = 0

    for(let i in candidatos) {
        i += candidatos[i].nota 
    }
    console.log(`O candidato(a) ${candidatos[nome]} passou com a nota ${[i]}`)
    }
}

let aprovacao = foiAprovado(candidatos)

gerarListAprovados()

///////////////////////////

let funcionarios = [{nome: 'Luiz', salario: 3000}, {nome: 'Carla', salario: 5000}]

function calcularImposto(salario) {
    if (salario > 4000 ) {
        return salario * 0.15
    } else {
        return salario * 0.07
    }
}

function gerarFolhaPagamento() { //função principal

    //esse for tranforma a posição em algo gradativo (0, 1, 2...)
    for(let i in funcionarios) { 

        let salarioBase = funcionarios[i].salario

        let imposto = calcularImposto(salarioBase)

        let pagamentoFinal = salarioBase - imposto

            console.log(`Nome: ${[funcionarios[i].nome]}. Salário: R$${pagamentoFinal.toFixed(2)}`)
    }

}

gerarFolhaPagamento() ///função principal

////////////////////////////////

let compras = [
    {cliente: 'Givaldo', valor: 150}, 
    {cliente: 'Ronildo', valor: 80}, 
    {cliente: 'Maria', valor: 10}, 
    {cliente: 'Clayton', valor: 200}
]

function calcularPontos(valorGasto) { //função auxiliar
    if (valorGasto > 100) {
        return valorGasto * 2
    } else {
        return valorGasto 
    }
}

function gerarRelatorioPontos() { //função principal

    for(let i in compras) {

        let pontosAcumulados = calcularPontos(compras[i].valor)

        console.log(`Cliente ${compras[i].cliente} acumulou ${pontosAcumulados} pontos.`)
    }
}

gerarRelatorioPontos()

///////////////////////////////////

let aparelhos = [
    {nome: 'Geladeira', watts: 300}, 
    {nome: 'Ar Condicionado', watts: 1500},
    {nome: 'Lâmpada', watts: 15}
]

function calcularKwh(watts) {
    return watts / 1000
}

function gerarRelatorioEnergia() {

    let totalKwh = 0
    
    for(let i in aparelhos) {
        let conversao = calcularKwh(aparelhos[i].watts)
    }
}

gerarRelatorioEnergia()

///////////////////////////////////

const mostrar = (n1, n2) => n1 + n2

console.log(mostrar(2, 4))

const soma = (...valores) => { //usar funções com spread se chama parâmetros rest
    let res = 0
    for(const i of valores) {
        res += i
    }
    return res
}

console.log(soma(10, 2, 3))*/

/////////////////////////////////////

/*const f = function(...valores) { //Função anônima é definida por ser uma variável e não precisar colocar o nome da função
    let res = 0
    for(const v of valores) {
        res += v
    }
    return res
}

console.log(f(10,5))

const f =new Function("v1","v2","return v1+v2") //Função construtor, é uma função anônima. DETALHE: O Function é com o "F" MAIÚSCULO.

console.log(f(10,5))*/

//////////////////////////

/*function* cores() { //Função geradora, tem o detalhe do * na function e o yield dentro dela
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value) //retorna o primeiro yield
console.log(itc.next().value) //retorna o segundo
console.log(itc.next().value) //retorna o terceiro

function* perguntas() {
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Udson').value)
console.log(itp.next('Jiu-jitsu').value) //ao invés de dar undefield, ele pega o return*/

///////////////////////////////

// método this

function aluno(nome, valor) {
    this.nome = nome
    this.valor = valor

    this.dadosArrow = function () {
        setTimeout(() => {
            console.log(this.nome)
        }, 2000)
        
        setTimeout(() => {
            console.log(this.valor)
        }, 4000)
    }
}

const all = new aluno ('Udson', 10)
all.dadosArrow()
