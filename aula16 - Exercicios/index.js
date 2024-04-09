/*<script>
        const num1 = prompt("Digite um número");
        document.body.innerHTML += `Seu número é: <strong>${num1}</strong><br />`;
        document.body.innerHTML += `${num1} é inteiro ? <strong> ${Number.isInteger(num1)}</strong><br />`;
        document.body.innerHTML += `Raiz Quadradada: <strong> ${num1 ** 0.5}</strong><br />`;
        document.body.innerHTML += `É NaN ? <strong>${Number.isNaN(num1)}</strong><br />`;
        document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(num1)}</strong><br />`;
        document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(num1)}</strong><br />`;
        document.body.innerHTML += `Com duas casas decimais: <strong>${num1.toFixed(2)}</strong>  <br />`;   

    </script> */

const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro ? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN ? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;