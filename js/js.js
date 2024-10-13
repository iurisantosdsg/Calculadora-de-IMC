const button = document.getElementById('buttonclick');




function testefun() {
const nome = document.getElementById('nomepaciente').value;
const altura = document.getElementById('alturapaciente').value;
const peso = document.getElementById('pesopaciente').value;
const resultado = document.getElementById('resultado');


if (nome !== '' && altura !== '' && peso !=='') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = ''

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso';
    }else if (valorIMC < 25) {
        classificacao = 'Com peso ideal. Parabéns';
    }else if (valorIMC < 30) {
        classificacao = 'Levemente acima do peso';
    }else if (valorIMC < 35) {
        classificacao = 'Com obesidade Grau I';
    }else if (valorIMC < 40) {
        classificacao = 'Com obesidade Grau II';
    }else {
        classificacao = 'Com obesidade Grau III. Cuidado!!';
    }

    resultado.textContent = `${nome} seu IMC e ${valorIMC}, você está ${classificacao}.`;

    //resultado.style.fontWeight = "bold";
    resultado.style.fontSize = "20px"

}

}



button.addEventListener('click', testefun);








