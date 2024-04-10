/*
if = SE
if else = Senao se
else = senao
Entre 0 - 11  - Bom dia
entre 12 - 17 - Boa tarde
entre 18 - 23 - Boa noite
*/

//inicializando a variavel
const hora = 13;

if (hora >=0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Hora fora do range');
}

// if pode ser usado sozinho
// Sempre que usar um else preciso de um if antes
// eu posso ter varios else ifs na checagem
// só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else ou apenas if

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
