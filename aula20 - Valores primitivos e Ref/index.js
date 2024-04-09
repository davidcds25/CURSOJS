// Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados
// Referência (mutável) - array, object, function - Passados por referência

//copiando o valor da memória sem alterar o dado com referência
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}
a.nome = 'João'
console.log(a, b);

/*
let a = [1, 2, 3];
let b = a;   // b está apontando para o mesmo valor na memória, logo se um é alterado, é alterado em ambos, diferente do primitivo
let c = [...a];
console.log(a, b, c);

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b, c);

c.push('Luiz')
console.log(a, b, c);
*/

/* Valor imutavel
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]);
*/

/*
let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/