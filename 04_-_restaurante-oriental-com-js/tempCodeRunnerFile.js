
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

dateDifferenceInHours(
    new Date(),
    datafim
);
