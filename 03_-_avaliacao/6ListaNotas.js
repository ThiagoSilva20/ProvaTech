var alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 7.0 },
    { nome: "Pedro", nota: 6.5 },
    { nome: "Ana", nota: 9.0 },
    { nome: "Carlos", nota: 5.0 }
  ];
  //relatorio
  console.log("Relatório de Notas");

  console.log("Nome | Nota");
  for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome + " | " + alunos[i].nota);
  }
  
  //maior nota
  var MaiorNota = alunos[0];
  for (var i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > MaiorNota.nota) {
      MaiorNota = alunos[i];
    }
  }

  console.log("Aluno com a Maior Nota: " + MaiorNota.nome + " (" + MaiorNota.nota + ")");
  
  // Conta a quantidade de alunos abaixo da média 7.0
  var AbaixoDaMedia = 0;
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < 7.0) {
      AbaixoDaMedia++;
    }
  }

  console.log("Quantidade de Alunos Abaixo da Média: " + AbaixoDaMedia);
  