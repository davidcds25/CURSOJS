/*
Valores avaliados em false
FALSY, false, 0, '', "", ``, null, undefined, NAN*/

//&& retorna o ultimo valor falso, caso contrario ultimo verdadeiro
/*
function falaOi () {
    return 'Oi';
}
const vaiExecutar = true;
console.log(vaiExecutar && falaOi());
*/

// || retorna o primeiro valor verdadeiro, caso contrario ultimo valor falso é apresentado
/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e)