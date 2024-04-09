// Aritméticos 
// Ordem de execução aritmética () -> ** -> mesma ordem da esquerda pra direita */% -> mesma ordem da esquerda pra direita +-

// (+) Adição / Concatenação
const num1 = 5;
const num2 = 10;
console.log('adição', num1 + num2);
// caso uma das consts ou variaveis seja string, o operador (+) faz a concatenação ao invés da soma
const num3 = '5';
const num4 = 10;
console.log('concatenação', num3 + num4);

// (**) Potência
const num5 = 5;
const num6 = 10;
console.log('Potenciação',num5 ** num6);

// (%) Resto da divisão
const num7 = 10;
const num8 = 5;
console.log('resto divisão',num7 % num8);

// Conta com prioridade
console.log('Priorizar sinais',(num1 + num2) * num3);

// Atribuir valor a variavel, logo não podemos usar essa atribuição a uma constante pois o valor altera. - Incremento
let contador = 1;
contador++;// 2
contador++;// 3 - retorna o valor e depois incrementa
++contador;// 4 - primeiro incrementa e depois retorna o valor
contador = contador + 2;// 6
console.log('Incremento',contador);

// Também funciona para subtração - Decremento
let contador1 = 5;
contador1--;// 4
--contador1;// 3
contador1 = contador1 - 2;// 1
console.log('decremento',contador1);

// Operadores de atribuição += *= **=
const passo = 50
let conta = 2;
conta += passo; // contador = contador + 50
console.log(conta);
conta *= passo;
console.log(conta);

// Transformando String em number -> parseInt (inteiro) / parseFloat (Casas decimais) / Number
const nume1 = 10;
const nume2 = Number('5.2');
console.log(nume1 + nume2);