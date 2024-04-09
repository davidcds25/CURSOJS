// Chamando as variaveis no console
let nome = 'Mario'; //String
console.log(nome,'nasceu em 1984.');
console.log('Em 2000',nome,'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com',nome,'em 2015');
console.log('O filho de',nome,'se chama Eduardo');


// Modificando valor da variavel
let nome; // Declarou a variável
nome = 'Qualquer valor'; //Inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome);


//Não podemos criar variáveis com palavras reservadas
//Variáveis precisam ter nomes significativos, não podendo utilizar funções da linguagem, Exemplo: let if

let nomeCliente = 'João';
console.log(nomeCliente);

//Não pode começar o nome de uma variável com um número
let no1me;

//Não podem conter espaços ou traços
// Utilizamos camelCase
let nomeCompletoDoCliente;

// As variaveis são Case-sensitive
let nomeCliente = 'Luiz';
let nomecliente = 'Otávio';
console.log(nomeCliente, nomecliente)

// Não podemos redeclarar variaveis com let
// Não utilizar VAR, utilizar let
