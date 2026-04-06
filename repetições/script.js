/*
    repetição serve para evitar que um código fique muito extenso quando for fazer algo que precise ser repetido várias vezes.

    while - 'enquanto', a primeira forma de repetir, o código coloca uma condição de que, enquanto estiver algo dentro do (), ele irá continuar fazer.

    do - 'faça', essa é a forma contrária do while, mas chegando ao mesmo resultado. O código primeiro pede pra fazer o que está dentro do bloco pra depois usar o while.
*/


var c = 1 //var recebe 1
while (c <= 6) { //enquanto 1 for menor ou igual a 6...
    console.log('Tudo bem?') // ...escreva 'Tudo bem?'...
    c++ // tradução - c = 1 + 1
        // ... de 1 em 1 até chegar a 6.
}



// Essa versão é o contrário da repetição acima.
var c = 1

do { // Faça...
    console.log('Tudo bem?') //...esse console
    c++ // de 1 em 1...
} while (c <= 10) // enquanto 1 for menor ou igual a 10 (até chegar a 10).



for(var c = 1;c <= 6;c++) { // for é bem mais simples, colocando a variável, o teste e o incremento dentro de ()
    console.log(c) // ele faz a mesma coisa que o while e o do while, mas de forma ainda mais simples.
}

// Modo de depuração (debug) serve para testar se o código está rodando certo. Muito útil pra corrigir bugs
console.log('vai começar...')
for(var c = 1;c <= 4;c++) {
    console.log(c)
}
console.log('Fim!')

/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

