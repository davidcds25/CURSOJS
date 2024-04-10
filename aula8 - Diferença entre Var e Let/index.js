// ECMAScript padronização da linguagem javascript pela empresa Ecma 
// Ecmascript 2015 (ES6) - Versão

// Diferença entre Var e Let, o Var pode ter a mesma variavel declarada 2x com valores diferentes, já com o let não.
var nome = 'luiz';
var nome = 'jorge';
// ele vai apresentar o ultimo valor associado a var informada.
console.log(nome);

// já com let ele apresenta erro
let nome = 'luiz';
let nome = 'jorge';
console.log(nome);
//SyntaxError: Identifier 'nome' has already been declared

// Lembrando aqui estamos falando de declaração de variavel, e não da associação do dado a variavel.