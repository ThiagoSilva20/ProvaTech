const prompt = require("prompt-sync")();

console.log("======================================")
console.log("== AUTOATENDIMENTO TOTEM LANCHONETE ==")
console.log("======================================")

var sanduiche = prompt("Qual será o sanduiche que você ira escolher: ");
var acomp = 0; 
var lista_acomp = "";


for( var i = 0; i < 5; i++){
    const adicionais = prompt("Acompanhamento? (concluir para sair) " );
    if(adicionais == "concluir") break;

    lista_acomp += adicionais + ",";
    acomp++;

}

var total_adc = acomp * 2;
var total = 20 + total_adc; 

console.log(sanduiche,"é o nome do sanduiche no valor de R$ 20,00 e pediu",acomp,"de acompanhamentos",lista_acomp,"no valor de",total_adc);

console.log("valor total a pagar é: R$", total);