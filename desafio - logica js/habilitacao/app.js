alert('Boas vindas ao nosso site!');

/* let nome = 'Lua';
let idade = 25;
let numVendas = 50;
let saldoDisponivel = 1000; */

//alert(nome);

let nomeUser = prompt('digite seu nome: ');
let idadeUser = prompt('digite sua idade: ');
let msgErro = 'Erro! Preencha todos os campos';

if (idadeUser >= 18) {
    console.log('Pode tirar a habilitação!');
} else {
    console.log('Não pode tirar a habilitação!')
}

alert(msgErro);