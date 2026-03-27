/*
    Operadores:

    tipos de operadores
    - aritméticos
    - atribuição
    - relacionais
    - lógicos
    - ternário

    aritméticos
    +
    -
    *
    /
    % 
    ** (potência)

    operadores binários são que precisamos de 2 elementos para a operação
    ex.: 5 + 2

    precedência (ordem)
    - ()
    - **
    - *, /, %, +, -
    - +, -

*/

var a = 5 + 3 //8
var b = a % 5 //3
var c = 5 * b ** 2 //45

/*
    Auto atribuições

    ele pode se colocar na própria variável pra fazer um calculo
*/

var n = 3
n = n + 4
n = n - 5
n = n * 4

//podemos simplificar 

var x = 2
x += 3

// operador de incremento simplifica mais ainda:

var x = 4
x++

/*
    relacionais

    >
    <
    >=
    <=
    ==
    !=

    5 > 2 = true
    7 < 4 = false
    8 >= 8 = true
    9 <= 7 = false
    5 == 5 = true (== é sinal de igual na programação)
    4 != 4 = false (!= é sinal de diferente)
*/