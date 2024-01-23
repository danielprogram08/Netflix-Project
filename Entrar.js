function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log("Seu email: " + email);
    console.log("Sua senha: " + senha);
    
    if (email == "" && senha == "") {
        alert("Email e senha não inseridos. Tente novamente!");
    } else if (email == "") {
        alert("Email não inserido. Tente novamente!");
    } else if (senha == "") {
        alert("Senha não inserida. Tente novamente!");
    } else {

    //Redireciona para a página do Usuário;
    window.location.href = 'Login.html';
    }
}