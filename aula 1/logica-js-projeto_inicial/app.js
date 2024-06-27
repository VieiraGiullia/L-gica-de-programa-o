alert('Boas-vindas ao jogo do Número Secreto');

let numeroAleatorio = 10000;
let numSecreto = parseInt(Math.random() * numeroAleatorio + 1);
console.log(numSecreto);
let chute //= prompt('Escolha um numero entre 1 a 30');
let tentativas = 1;

while ( chute != numSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroAleatorio}`);
    if ( chute == numSecreto) {
        break;
    } else {
        if (chute > numSecreto) {
            alert(`opa! quase, é um número menor que ${chute}`);
        } else {
            alert(`opa! quase, é um número maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativas} ${palavraTentativa}.`);

/* 
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/