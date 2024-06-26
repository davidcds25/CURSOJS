//Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado(`Peso inválido`, false);
        return
    } else if (!altura) { 
        setResultado(`Altura Inválida`, false);
        return 
    }
    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);
    const msg = `seu imc é ${imc} (${nivelImc}).`;


    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9 && imc <= 39.8) {
        return nivel [4];
    } else if (imc >= 29.9 && imc <= 34.8) {
        return nivel [3];
    } else if (imc >= 24.9 && imc <= 29.8) {
        return nivel [2];
    } else if (imc >= 18.5 && imc <= 24.8) {
        return nivel [1];
    } else if(imc < 18.5) {
        return nivel [0];
    };
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {   const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';
const p = criaP ();
if (isValid)  {
    p.classList.add('paragrafo-resultado');
} else {
    p.classList.add('bad');
}
p.innerHTML = msg;
resultado.appendChild(p)
}
 

