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

//Mostrar opção de terminar sessão
window.onload = function sessao () {
    var login = getCookie("login");

    if (login == "true") {
        document.querySelector('#perfil').style.display = "inline";
        document.querySelector('#terminarSessao').style.display = "inline";
        document.querySelector('#login').style.display = "none";
    }
    else {
      document.querySelector('#perfil').style.display = "none";
      document.querySelector('#terminarSessao').style.display = "none";
      document.querySelector('#login').style.display = "inline";
    }
};

// Terminar sessão
function termSessao() {
  window.alert("Sessão terminada!");
  document.cookie = "login =";
  window.location.href = "main.html";

}
document.querySelector("#terminarSessao").addEventListener('click', termSessao);