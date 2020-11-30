//Função para separar as cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

// Função para verificar o login
// User padrão: admin; Pass padrão: admin;
function login (){
    var nomeUtilizador = document.getElementById('user').value;
    var palavraPass = document.getElementById('pass').value;

    // Obter os valores de utilizador e password das cookies
    var username = getCookie("user");
    var password = getCookie("pass");

    if ((nomeUtilizador == "admin" && palavraPass == "admin") || (nomeUtilizador == username && palavraPass == password)) {
      window.location.href = "utilizador.html";
      document.cookie = "login = true";
    }
    else {
      window.alert('Nome de utilizador ou palavra-pass incorretos!');
      document.getElementById('user').value = "";
      document.getElementById('pass').value = "";
    }
}
document.querySelector('.log-btn').addEventListener('click', login);
