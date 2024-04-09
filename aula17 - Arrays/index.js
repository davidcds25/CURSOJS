// Um Array é considerado como objeto no JavaScript
// Strings são indexadas
//            012345678910
const nome = 'Luiz Otávio'
console.log(nome[0])

// Já o Array é indexado pelo valor do array
//                 0        1      2
const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza');
alunos.push('Eduardo');


console.log(alunos.slice(0, -2));
//delete alunos[1]; //apaga somente o valor do indice


//alunos.pop(); //remove o ultimo dado do array
//alunos.shift(); //remove o dado do primeiro
//const removido = alunos.pop(); // remove o ultimo indice do array, e salva o valor em uma variavel
//const removido = alunos.shift(); // remove o primeiro indice do array, e salva o valor em uma variavel
//console.log(removido);
//console.log(alunos);

//Adiciona um indice no começo, sem apagar o indice primario.
//alunos.unshift('Luiza');

// Altera valor do array através do indice
//alunos[0] = 'Eduardo';
//alunos[3] = 'Luiza';

//Adiciona um indice no final de acordo com o ultimo preenchido
//alunos.push('Marcos'); 
//alunos.push('Marcio');


//console.log(alunos[0]);