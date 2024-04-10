// Exercicio precisamos que o valor de A va para B, o valor de B vá para C, e o valor de C vá para A, sem modificar nada, para resolução, pode ser criado mais variaves.

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
//A variavel pendulo vai receber o valor de A para ser armazenado, antes que A perca seu valor original.
let pendulo;

pendulo = varA; //A
varA = varB; //B
varB = varC; //C
varC = pendulo; //A

console.log(varA, varB, varC);

// podemos resolver com array tmb
//[varA, varB, varC] = [varB, varC, varA];

