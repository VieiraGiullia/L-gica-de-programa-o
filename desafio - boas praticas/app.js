/*
Desafios finais
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
*/

console.log('Seja bem-vindo(a)!!')

/*
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
*/

let nome = 'giullia';
console.log(´Óla, ${nome}´);

/*
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
*/

alert(´Óla, ${nome}´);

/*
Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
*/

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

/*
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
*/

let valor1 = 12;
let valor2 = 10;
let resultado = (valor1 + valor2);
console.log(resultado)

/*
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
*/

let resultadoSub = (valor1 - valor2);

/*
Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
*/

let idade = prompt('qual a sua idade?');

if (idade > 18) {
    console.log('Que pena, você já é maior de idade')
} else {
    console.log('Eh, você ainda é de menor')
}

/*
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
*/

let num = prompt('digite um valor');

if (num > 0) {
    console.log('este número é positivo');
} else if (num < 0) {
    console.log('este número é negativo');
} if (num == 0) {
    console.log('este número é zero');
} 

/*
Use um loop while para imprimir os números de 1 a 10 no console.
*/
let valor = 1;
while (valor < 10) {
    console.log(valor)
    valor++
}

/*
Crie uma variável "nota" e atribua um valor numérico a ela. 
Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
*/

let nota = 2;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado')
}
/*
Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
*/

let numero = Math.random();
console.log(numero);

/*
Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
*/

let inteiro = Math.floor(Math.random() * 10 + 1);
console.log(inteiro)

/*
Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

let milhar = Math.floor(Math.random() * 1000 + 1);
console.log(milhar)