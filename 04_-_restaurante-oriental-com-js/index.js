//pegar o elemento cronometro
let cronometro = document.getElementById('cronometro');
//definir um valor 

//definir estilo para o cronometro
cronometro.style.color = "white";
cronometro.style.fontSize = '20px';
cronometro.style.backgroundColor = 'rgba(0,0,0,0.4)';
cronometro.style.padding = '5px';
cronometro.style.borderRadius = '5px';


let datafim = new Date();
datafim.setHours(23);
datafim.setMinutes(59);
datafim.setSeconds(59);

const dateDifferenceInHours = (dateInitial, dateFinal) => {
    let horas = dateFinal.getHours() - dateInitial.getHours();
    let minutos = dateFinal.getMinutes() - dateInitial.getMinutes();
    let segundos = dateFinal.getSeconds() - dateInitial.getSeconds();
    return (`As ofertas exclusivas terminam em: ${horas}:${minutos}:${segundos}`);
}


function rendercronometro() {
    cronometro.innerText = dateDifferenceInHours(
        new Date(),
        datafim
    );
};
let id = setInterval(rendercronometro, 1000);
