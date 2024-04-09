// Exercicio de soma das variaveis, recebendo o numero do usuário no navegador, e apresentando o resultado da soma em alerta no navegador

let num1 = prompt('digite um número');
let num2 = prompt('digite o numero 2');
//console.log(num1,num2)
num1 = parseInt(num1);
num2 = parseInt(num2);
//console.log(num1,num2)
const resultado = num1 * num2;
alert(`O resultado foi ${resultado}`);
// Podemos também realizar o calculo direto no alerta
//alert(`O resultado foi ${num1 * num2}`);

