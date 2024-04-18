//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
//O mês em javascript começa do 0 - Janeiro / 1- Fevereiro...
//const data = new Date(2019, 3, 20, 15, 14, 27, 500);  a, m, d, h, M, s, ms
//const data = new Date('2019-04-20T20:20:59.100');
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth() + 1); // Mês começa do zero
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Segundo', data.getSeconds());
//console.log('Milisegundo', data.getMilliseconds());
//console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
//console.log(data.toString());
//console.log(Date.now());

// Aqui criamos uma função para tratar o retorno da data, caso não tenha zero a esquerda
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

// Aqui criamos uma função para formatar o retorno da data
function formataData(data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth());
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const minuto = zeroAEsquerda (data.getMinutes());
    const segundos = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

// Declaração das consts Date, e chamada da função para formatação
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
