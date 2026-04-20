const botao = [...document.getElementsByTagName('div')]

botao.map((el) => {
    el.addEventListener("click", (evet) => {
        const el = evet.target
        el.classList.toggle("destaque")
    })
})

// botao.addEventListener("click",() => {
//     alert('Clicou')
// })