/* caso precise usar aspas dentro do aspas da string, podemos usar a barra invertida como escape */
let UmaString = "Um \"texto\"";
console.log (UmaString); 

/*acessando o indice do texto da string*/
let DuaString = "O rato roeu a roupa do rei de roma";
console.log (DuaString[4]); // retorna a string do indice apontado
console.log(DuaString.charAt(1)); // retorna a string do indice apontado
console.log(DuaString.concat(' ', 'em', ' ', 'um', ' lindo dia')); //concatenação de texto
console.log(DuaString.indexOf('Um')); //localiza em qual index esta a palavra buscada
console.log(DuaString.lastIndexOf('e')); //localiza em qual index esta a palavra buscada de tras pra frente
console.log(DuaString.match(/[a-z]/g)); // expressão regular para buscar todas letras minusculas, obs: se tornou um array por conta do /g
console.log(DuaString.search(/x/)); // retorna o indice do local apontado, porém aceita expressões regulares
console.log(DuaString.replace(/Um/, 'Outra')); // troca de dados
console.log(DuaString.length); // tamanho da string
console.log(DuaString.slice(2, 5)); // corta o retorno da string, caso você utilize valor negativo, ele le de traz pra frente
console.log(DuaString.substring(DuaString.lenght - 5, DuaString.lenght - 1));
console.log(DuaString.split(' ')); // separar as palavras em array
console.log(DuaString.toUpperCase()); // deixar tudo maiusculo
console.log(DuaString.toLowerCase()); // deixar tudo minusculo



