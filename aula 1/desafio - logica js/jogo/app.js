 pontuacao = parseInt(prompt('escolha um número até 100'), 10);
 pontuacao2 = parseInt(prompt('escolha mais um número até 50'), 10);

 total = pontuacao + pontuacao2; 

if (total >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}