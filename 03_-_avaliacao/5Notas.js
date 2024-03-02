const prompt = require("prompt-sync")();

function media(nome, modulo, nt1, nt2) {
    var media = (parseFloat(nt1) + parseFloat(nt2)) / 2;
    console.log(parseFloat(media));
    if (media >= 7) {
      console.log(nome + " foi aprovado no módulo " + modulo + ".");
    } else {
      console.log(nome + " foi reprovado no módulo " + modulo + ".");
    }
  }
  
  for (var i = 0; i < 5; i++) {
    var nome = prompt("Nome do aluno:");
    var modulo = prompt("Módulo:");
    var nota1 = prompt("Primeira nota:");
    var nota2 = prompt("Segunda nota:");
    media(nome, modulo, nota1, nota2);
  }