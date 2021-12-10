/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

let continuar = confirm("Deseja iniciar uma Nova Rodada ?");
const carta = comprarCarta();
const carta1 = comprarCarta();
const carta2 = comprarCarta();
const carta3 = comprarCarta();

let pontosUser = carta.valor + carta1.valor;
let pontosPc = carta2.valor + carta3.valor;

if (continuar) {
  exibirCartas();
} else {
  console.log("o Jogo Acabou !");
}

function exibirCartas() {
  console.log(
    `Usuário - cartas ${carta.texto} ${carta1.texto} - pontuação ${pontosUser}`
  );
  console.log(
    `Computador - cartas ${carta2.texto} ${carta3.texto} - pontuação ${pontosPc}`
  );
  exibirResultado();
}

function exibirResultado() {
  if (pontosUser == pontosPc) {
    console.log("Empate !!");
  } else if (pontosUser > pontosPc) {
    console.log("o Usuário Ganhou !");
  } else {
    console.log("o Computador Ganhou");
  }
}


