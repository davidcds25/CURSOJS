// [array] {Objeto}
/*const pessoa1 = { 
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '25'
};
const pessoa2 = { 
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: '26'
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/* function criaPessoa (nome, sobrenome, idade) {
    return {                     //factory, cria objetos
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa ('Luiz', 'Cavalcante', 29);
const pessoa2 = criaPessoa ('Marcos', 'Gomes', 28);
const pessoa3 = criaPessoa ('Maria', 'Santos', 27);
const pessoa4 = criaPessoa ('Luiza', 'Silva', 26);
const pessoa5 = criaPessoa ('Tamiris', 'Otavio', 25);
console.log(pessoa1, pessoa2, pessoa3.nome, pessoa4.nome, pessoa5.nome);
*/

//Aqui criamos o objeto Pessoa que recebe nome, sobrenome e idade, e dentro dele temos 2 funções a fala() que apresenta um print ao usuario, e o incrementaIdade()
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

//aqui estamos chamando as funções dentro do objeto pessoa1
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
