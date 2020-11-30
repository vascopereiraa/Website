function registo () {
    var nomeUtilizador = document.getElementById('nome').value;
    var user = document.getElementById('novoUser').value;
    var pass = document.getElementById('novaPass').value;

    document.cookie = "";
    document.cookie = "name = " + nomeUtilizador;
    document.cookie = "user = " + user;
    document.cookie = "pass = " + pass;

    if (nomeUtilizador != '' && user != '' && pass != '') {
        window.alert('Utilizador registado com sucesso!');
        window.location.href = "login.html";
    }
    else 
        window.alert('Todos os campos necessitam de estar preenchidos!')

    // Mostrar as cookies
    // var x = document.cookie;
    // console.log(x);
}
document.querySelector('.reg-btn').addEventListener('click', registo);

// Limpa determinada cookie
// document.cookie = "__COOKIE__=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
