function meuEscopo(){
   //aqui apontamos o form que foi criado no html
    const form = document.querySelector('.form');
    //aqui apontamos a div criada no html
    const resultado = document.querySelector('.resultado');
   //array vazio que vai receber os dados
    const pessoas = [];
   //criação da função
    function recebeEventoForm (evento) {
      //faz com que ao clicar no botão a pagina não seja reiniciada
        evento.preventDefault();
      //aqui estamos selecionando o retorno do usuario de acordo com cada resposta
     const nome = form.querySelector('.nome');
     const sobrenome = form.querySelector('.sobrenome');
     const peso = form.querySelector('.peso');
     const altura = form.querySelector('.altura');
      //aqui estamos guardando no array os valores digitados pelo usuario.
     pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
     });

     console.log (pessoas);
     //aqui estamos adicionando um paragrafo no HTML com os valores informados
     resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }



   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();