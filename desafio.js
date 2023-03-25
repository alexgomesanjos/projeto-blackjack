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

function jogoDesafioBlackjack() {

   

   if (confirm(`Seja bem vindo ao jogo desafio Blackjack 21`) === true) {
      let cartasUsuario = []
      let cartasUsuario1 = comprarCarta ()
      let cartasUsuario2 = comprarCarta ()
      let cartascomputador1 = comprarCarta ()
      let cartasComputador2 = comprarCarta ()
      let calculaUsuario = cartasUsuario1.valor + cartasUsuario2.valor
      let calculaComputador = cartascomputador1.valor + cartasComputador2.valor  
   }
      let i = confirm(`Cartas do Usuários - ${cartasUsuario1.texto} e ${cartaUsuario2.texto} - ${calculaUsuario} \nCartas do Computador - ${cartasComputador1.texto}\nDeseja comprar mais cartas?` )

      while( i === true) {
         let novaCarta = comprarCarta()
         calculaUsuario += novaCarta.valor
         confirm(`Cartas do Usuário - ${cartasUsuario1.texto} e ${cartasUsuario2.texto} - ${calculaUsuario} \nCartas do Computador - ${cartasComputador1.texto} n\Deseja comprar mais cartas ?`)
      if(calculaUsuario > 21) {
         i = false
      }else {
         i = confirm(`Cartas do Usuário - ${cartasUsuário1.texto} e ${cartasUsuario2.texto} - ${calculaUsuario} \nCartas do Computador - ${cartasComputador1.texto} e \nDeseja comprar mais cartas?`)
      }

      }

      console.log(`Cartas do Usuário - ${cartasUsuario1.texto} e ${cartasUsuario2.texto} - ${calculaUsuario}`)
      console.log(`Cartas do Coputador - ${cartasComputador1.texto} e ${cartasComputador2.texto} - ${calculaComputador}`)
      if (calculaUsuario === 2 * "A"){
         confirm(`Jogo Encerrou`)
      }else if(calculaUsuario > 21) {
         confirm(`Computador Ganhou!! Você estourou!`)
         console.log(`Computador Ganhou, Você estourou!`)
      }else if(calculaUsuario > calculoCompitador)

   confirm(`O jogo encerrou! Quer iniciar uma nova rodada?`)
} 


jogoDesafioBlackjack()

//tentei ir até o fim do código e desenvolver, porém não consigo termirar pois não tive tempo. Por isso prefiro entregar nesse ponto do que não entregar;