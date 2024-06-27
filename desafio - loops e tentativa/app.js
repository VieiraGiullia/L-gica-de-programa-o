/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
*/

let num = 1;

while (num <= 10) {
    alert(num)
    num++
}

/*
Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
*/

let numero = 10;

while (numero >= 0) {
    alert(numero)
    numero--
}

/*
Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
*/

let num1 = prompt('digite um número: ')
let contador = 0

while (contador < num1) {
    alert(contador)
    contador++
}

/*
Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

let num2 = prompt('digite um número: ')
let contador2 = 0

while (num2 >= contador2) {
    alert(num2)
    num2--
}