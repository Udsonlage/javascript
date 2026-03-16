const usuario = document.querySelector("#iusuario");
const senha = document.querySelector("#isenha");
const botao = document.querySelector("#button");

botao.addEventListener ("click", (event) => {

    event.preventDefault();

    if (usuario.value === "") {
        usuario.placeholder = "Preencha o usuário!";
        usuario.style.borderColor = "red";
    }
    //Não está funcionando!!
    else if (senha.value === "") {
        senha.placeholder = "Preencha a senha!";
        senha.style.borderColor = "red";
    }

    else {
        usuario.style.borderColor = "white";
        senha.style.borderColor = "white";
    }

});

usuario.addEventListener("blur", () => {

    if (usuario.value === "") {
    usuario.placeholder = "Preencha o usuário!";
    usuario.style.borderColor = "red";
    }
});

usuario.addEventListener("focus", () => {

    usuario.placeholder = "Usuário";
    usuario.style.borderColor = "#b8f18a";
});

senha.addEventListener("blur", () => {

    if (senha.value === "") {
    senha.placeholder = "Preencha a senha!";
    senha.style.borderColor = "red";
    }
});

senha.addEventListener("focus", () => {

    senha.placeholder = "Senha";
    senha.style.borderColor = "#b8f18a";
});