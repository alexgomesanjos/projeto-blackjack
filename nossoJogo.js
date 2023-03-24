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

    console.log(`Welcome to play Blackjack!`);

    const startarNovoJogo = confirm(`To Start a New Game?`);

    function jogoDeCartas() {
    
      if(startarNovoJogo){
         let cartasJogador1 = comprarCarta()
         let cartasJogador2 = comprarCarta()
         let cartasComputador1 = comprarCarta()
         let cartasComputador2 = comprarCarta()

         let pontosJogador = cartasJogador1.valor + cartasJogador2.valor
         let pontosComputador = cartasComputador1.valor + cartasComputador2.valor

         console.log(`Jogador - cartas: ${cartasJogador1.texto} ${cartasJogador2.texto}
          - pontuação ${pontosJogador}`);
         console.log(`Computador - Cartas: ${cartasComputador1.texto}
          ${cartasComputador2.texto} - pontuação ${pontosComputador}`);

      if (pontosJogador > pontosComputador){
          console.log(`o jogador venceu!! :)`);
      }else if (pontosComputador > pontosJogador) {
          console.log(`o computador venceu!! :(`);

      } else if (pontosJogador === pontosComputador){
          console.log(`Empate!!`);
      }
      
      }else{ 
          console.log((`Finish. Quer jorgar novamente? Atualize sua página.`));
      }
    }

    jogoDeCartas()