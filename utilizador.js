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

// Controlo e gestão de informações na página do utilizador
window.onload = function nomeUtilizador() {
  var nome = getCookie("name");
  document.querySelector('#nomeUser').textContent = "Bem vindo, " + nome;
};

