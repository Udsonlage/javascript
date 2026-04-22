// MÉTODO FILTER
/*
    const filtroMaior18 = (valor) => {
        if (valor >= 18) {
            return valor
        }
    }

    const idades = [15, 21, 30, 17, 18, 44, 12, 50]
    const maior = idades.filter(filtroMaior18)

    console.log(idades)
    console.log(maior)
*/

const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((v) => { // o filtro é criado para o idades, com o valor de cada elemento do array
    if (v >= 18) {
        return v
    }
})

const menor = idades.filter((v) => {
    if (v < 18) {
        return v
    }
})

console.log(maior) // [ 21, 30, 18, 44, 50 ]
console.log(menor) // [ 15, 17, 22 ]
