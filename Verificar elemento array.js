let lista = [85,46,45,95,68];
let numeroProcurado;

function arrayBotaoJS() {
    numeroProcurado = 15;

    document.getElementById('numero-JS1').innerHTML = `<strong>Número:</strong> ${numeroProcurado}`;
    let resultado = document.getElementById('validacao-js');

    verificandoElementoArray(lista, numeroProcurado, resultado);
}

function arrayBotaoUsuario() {    
    let numero = document.getElementById('numero-usuario1').value;
    numeroProcurado = Number(numero);

    console.log(numeroProcurado);
    console.log("typeof: ", typeof(numeroProcurado));
    console.log("isNaN: ", isNaN(numeroProcurado));

    let resultado = document.getElementById('validacao-usuario');

    verificandoElementoArray(lista, numeroProcurado, resultado);
}

function verificandoElementoArray(lista, numeroProcurado, resultado) {
    if(lista.includes(numeroProcurado)) {
        resultado.innerHTML = `O número ${numeroProcurado} está inserido no array:<br> ${lista}.`;
    } else {
        resultado.innerHTML = `O número ${numeroProcurado} não está inserido no array:<br> ${lista}.`;
    }
}