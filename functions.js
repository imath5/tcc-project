function signin() {
    var login = document.getElementById('email').value
    var senha = document.getElementById('password').value

    if (login == "admin@gmail.com" && senha == "admin") {
        alert('Login feito com sucesso');
        location.href = "homepage.html"
    } else {
        alert('Usuário ou senha incorreto')
    }
}

function showpw() {
    var check = document.getElementById("password");
    if (check.type == "password") {
        check.type = "text"
    } else {
        check.type = "password"
    }
}

function signup() {
    location.href = "cadastro.html"
}

function signedup() {
    location.href = "index.html"
}

function b2login() {
    location.href = "index.html"
}