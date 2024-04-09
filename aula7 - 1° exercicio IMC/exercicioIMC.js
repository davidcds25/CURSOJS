/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/

const nome = 'DAvid';
const sobrenome = 'Cavalcante dos santos';
const idade = 27;
const peso = 77;
const alturaEmM = 1.70; 
let imc = peso / (alturaEmM*alturaEmM);
let anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg e tem de altura', alturaEmM+'0Cm', 'nasceu no ano de', anoNascimento, 'E o seu IMC é de', imc);
// template strings
console.log(`${nome} ${sobrenome} tem ${idade} e pesa ${peso}Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)