//Criação de  objeto
var rafa = {
  nome: "rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
<<<<<<< HEAD
  pontos: 0,
=======
  pontos: 0
>>>>>>> temp-branch
};

var jogadores = [rafa];

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += " <td>" + jogadores[i].vitorias + "</td>";
    elemento += " <td>" + jogadores[i].empates + "</td>";
    elemento += " <td>" + jogadores[i].derrotas + "</td>";
    elemento += " <td>" + jogadores[i].pontos + "</td>";
    elemento +=
      ' <td><button onClick="adicionarVitoria(' +
      i +
      ')">Vitória</button></td>';
    elemento +=
      ' <td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>';
    elemento +=
      ' <td><button onClick="adicionarDerrota(' +
      i +
      ')">Derrota</button></td></tr>';
  }
  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  calculaPontos(i);
}

function adicionarEmpate(i) {
  jogadores[i].empates++;
  calculaPontos(i);
}

function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  calculaPontos(i);
}

function calculaPontos(i) {
  jogadores[i].pontos = jogadores[i].vitorias * 3 + jogadores[i].empates;
  exibirJogadores(jogadores);
}

function reniciarClassificacao() {
  for (var j = 0; j < jogadores.length; j++) {
    jogadores[j].vitorias = 0;
    jogadores[j].empates = 0;
    jogadores[j].derrotas = 0;
    jogadores[j].pontos = 0;
  }
  exibirJogadores(jogadores);
}

function adicionarJogador(nomeJogador) {
  var newPlayer = {
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
<<<<<<< HEAD
    pontos: 0,
=======
    pontos: 0
>>>>>>> temp-branch
  };

  jogadores.push(newPlayer);

<<<<<<< HEAD
  window.location.replace("index.html");
}
=======
  exibirJogadores(jogadores);
}
>>>>>>> temp-branch
