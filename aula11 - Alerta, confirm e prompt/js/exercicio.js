// Exercicio de soma das variaveis, recebendo o numero do usuário no navegador, e apresentando o resultado da soma em alerta no navegador

//criação da caixa de digitação
let num1 = prompt('digite um número');
let num2 = prompt('digite o numero 2');
//Associa o valor digitado a variavel e transforma em inteiro
num1 = parseInt(num1);
num2 = parseInt(num2);
//faz o calculo dos valores digitados e apresenta um alerta como resultado
const resultado = num1 * num2;
alert(`O resultado foi ${resultado}`);
// Podemos também realizar o calculo direto no alerta
//alert(`O resultado foi ${num1 * num2}`);

