const pessoa = {
    nome: "Udson",
    idade: 25,
    altura: "1,61m",
    peso: "72kg"
}

const stringJson = JSON.stringify(pessoa)
const objetoJson = JSON.parse(stringJson)

console.log(stringJson)
console.log(objetoJson)