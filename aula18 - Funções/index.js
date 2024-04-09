
//Sempre que dentro de uma função for localizado o return dentro da função, nada após isso sera executado
//function soma(x, y) {
//    const resultado = x + y;
//    return resultado;
//}
//const resultado = soma(5, 10);
//console.log(resultado);



//criação da função com retorno
//function saudacao(nome) {
//    return `Bom dia ${nome}!`;
//}

//criação da variavel que armazena o valor na função e apresenta
//const variavel = saudacao('Luiz');
//console.log(variavel);

//chamada da função
//saudacao('Marcos');

//função dentro da variavel
//const raiz = function (n) {
//    return n ** 0.5;
//}
//console.log(raiz(9));

//Arrow Function, mesma coisa que a função na variavel porém mais simples.
const raiz = (n) =>  n ** 0.5;

console.log(raiz(9));

