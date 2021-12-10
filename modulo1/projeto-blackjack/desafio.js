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

let continuar = confirm(
  "Boas vindas ao jogo de Blackjack!\nDeseja iniciar uma Nova Rodada ?"
);

let cartasUser = [0];
let cartasPc = [];


if (continuar) {
  exibirCartas();
} else {
  confirm("o Jogo Acabou !");
}

function exibirCartas() {
  for (i=0; i<10;i++) {
    let carta1 = comprarCarta().texto;
    let valorCarta1 = comprarCarta().valor;
    if (
      confirm(
        `Suas cartas são : ${carta1} - A carta revelada do computador é ${
          comprarCarta().texto
        }\n Deseja comprar mais uma carta ?`
      )
    ) {
      cartasUser.push(valorCarta1);
    } else {
      alert("o Jogo Acabou");
    }
  }
}
for(var i = 0, total = 0; i < cartasUser.length; total += cartasUser[i++]);
console.log(total);
