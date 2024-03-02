const prompt = require("prompt-sync")();

var clientes_saldos = {"thiago": 1000.0,"moises": 500.0, "bruna": -250.0};

var nome = prompt("Digite o nome do cliente:");

var nome = nome.toLowerCase();

var cliente_saldo = clientes_saldos[nome];

console.log("O saldo da conta de " + nome + " é R$" + cliente_saldo + ".")