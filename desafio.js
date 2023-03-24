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
 *//*


function desafioBlackjack(){

let jogador = [];
let computador = [];

let novaRodada = (`Bem vindo ao jogo de Blackjack
Quer iniciar uma nova rodada?`);
//jogador/computador coprando cartas

if(novaRodada){
   let darCartas = false;
   while(!darCartas){
      jogador.push(comprarCarta());
      jogador.push(comprarCarta());
      computador.push(comprarCarta());
      computador.push(comprarCarta());
      //verificação do as
      if{
      (jogador[0].valor === 11 && jogador[1].valor === 11) ││ (computador[0].valor === 11 
         && computador[1].valor === 11)
         { 
            jogador = [];
            computador = [];
         } else {
            darCartas = true;
         }
      }
      computador[0].texto = `CARTA REVELADA`;
      computador[0].valor = 0;

      let textoJogador = `jogador: ${jogador[0].texto} ${jogador.texto[1].texto}`;
      let textoComputador = `Computador: ${jogador[0].texto} ${jogador.texto[1].texto}`;

      let valorJogador = 0
      let textoComputador = 0

      for(let 1 = ; i < jogador.length; i++) {
         textoJogador += jogador{i}.texto + "";
         valorJogador += jogador[i].valor;
         {

         for(let 1 = ; i < computador.length; i++) {
            textoJogador += computador{i}.texto + "";
            valorJogador += computador[i].valor;
         }
         
         let compraCarta = true;

         while (comprarCarta) {
            if (valorComputador>21) {
               break;
            }
            let novaCarta = 
            confirm(`${textoJogador} A carta revelada do computador é ${textoComputador[0].texto}${textoComputador[1].texto} "Deseja comprar uma carta?"`)
         }
      }

      //Mostrando as cartas do jogador  A primeira carta do computador
      //alert(`Jogador:${jogador[0].texto} ${jogador[1].texto}\nComputador: ${computador[0].texto}
      // ${computador[1].texto} `);
      }

   }
 }
desafioBlackjack() 
*/
//feedback quarta

function desafioBlakcjack() {

let usuario = []
let computador = [] 
const inicio = confirm(`Boas vindas ao Jogo Blackjakc! Quer iniciar uma nova rodada?`)
const cartaUsuario1 = usuario.push(comprarCarta())
const cartaUsuario2 = usuario.push(comprarCarta())
const cartaComputador1 = computador.push(comprarCarta())
const cartaComputador2 = computador.push(comprarCarta())


let resultado = confirm(`Suas cartas são ${usuario[cartaUsuario1 - 1].texto} +  ${usuario[cartaUsuario2 - 1].texto}.\n A carta do computador é: ${computador[cartaComputador1 - 1].texto}`)
 let contador = 0
while(resultado){
   for(let carta of usuario){
      contador = contador + carta.valor
    }
   if(contador > 21){
      resultado = false
      return alert(`O computador ganhou!`)
   }else{
      resultado = confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto} \n Deseja comprar mais uma carta?`)
   }
  


}
console.log(contador)

}


console.log(usuario)
// Se as duas cartas iniciais do usuário ou do computador fprem dois ases (A)
if(comprarCarta === 2 * "A"){
   return `Fim do Jogo`
}
}

desafioBlakcjack()