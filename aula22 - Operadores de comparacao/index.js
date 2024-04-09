/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/
const num1 = 11; //Number
const num2 = '11'; //String
const comp = num1 > num2;
const comp2 = num1 >= num2;
const comp3 = num1 < num2;
const comp4 = num1 <= num2;
const comp5 = num1 == num2; // compara independente se é do mesmo tipo, exemplo 11, '11' que no caso seria uma string
const comp6 = num1 === num2; // aqui ele diferencia também o tipo da variavel, então 11 e '11' retorna false
const comp7 = num1 != num2; // compara independente se é do mesmo tipo, exemplo 11, '11' que no caso seria uma string
const comp8 = num1 !== num2; // aqui ele diferencia também o tipo da variavel, então 11 e '11' retorna false

console.log(`1 - ${comp}, 2 - ${comp2}, 3 - ${comp3}, 4 - ${comp4}, 5 - ${comp5}, 6 - ${comp6}, 7 - ${comp7}, 8 - ${comp8}`); //retorno boolean
