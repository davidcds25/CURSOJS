// Padrão IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0


num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//num1 = num1.toString();   Transformar uma variavel de number para string
//console.log(num1.toString(10)); //Qtde de casas decimais apresentadas
//console.log(num1.toFixed(2)); // arredonda o valor de acorda com as casas decimais informadas
//console.log(Number.isInteger(num1)); // retorna de forma Boolean, se o valor é inteiro ou não
//let temp = num1 * '5';
//console.log(Number.isNaN(temp)); // Verifica se é Not a Number (NaN) e retorna de forma boolean.
//console.log(temp);
