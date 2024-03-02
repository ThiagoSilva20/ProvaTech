const prompt = require("prompt-sync")();

var alunos = [];
var nome;

while (nome !== "") {
    nome = prompt("Digite o nome do aluno:");
    alunos.push(nome);
}

console.log(alunos.join(", "));

var alunos_s = [];
var nome_s;

do{

    nome_s = prompt("Digite o nome do aluno:");
    alunos_s.push(nome_s);

}while (nome_s !== ""); 
console.log(alunos_s.join(", "));