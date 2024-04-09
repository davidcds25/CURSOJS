let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let pendulo;

pendulo = varA;
varA = varB;
varB = varC;
varC = pendulo;

console.log(varA, varB, varC);

// podemos resolver com array tmb
//[varA, varB, varC] = [varB, varC, varA];

