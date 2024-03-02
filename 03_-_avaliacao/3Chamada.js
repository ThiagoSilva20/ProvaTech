const prompt = require("prompt-sync")();

var turma = [];
var valor = true;

while(valor == true){
    var chamada = prompt("Nome Aluno: ");
    turma.push(chamada);
    if(chamada == "") {
        valor = false;
    }
}

console.log(turma);