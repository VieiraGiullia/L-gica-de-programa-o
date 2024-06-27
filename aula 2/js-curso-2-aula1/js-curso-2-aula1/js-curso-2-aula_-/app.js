/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let listaNumSorteado = []
let numLimite = 10
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazinlian Porteguese Female' , {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) { 
            exibirTextoNaTela ('p', '0 número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    tentativas++;
    limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qntdElementosLista = listaNumSorteado.length;

    if(qntdElementosLista == numLimite) {
        listaNumSorteado = []
    }
    
    if(listaNumSorteado.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumSorteado.push(numEscolhido);
        console.log(listaNumSorteado);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}