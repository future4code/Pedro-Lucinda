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

const partida = () => {
   console.log("Bem Vindo ao jogo de BlackJack")

   if (confirm("Quer iniciar uma nova rodada?")) {
      const cartaJog = comprarCarta();
      const cartaJog2 = comprarCarta();
      const pontuacaoJog = cartaJog.valor + cartaJog2.valor

      console.log(`Usuario - cartas: ${cartaJog.texto} ${cartaJog2.texto} - pontuacao ${pontuacaoJog} `)

      const cartaPC = comprarCarta();
      const cartaPC2 = comprarCarta();
      const pontuacaoPC = cartaPC.valor + cartaPC2.valor

      console.log(`Computador - cartas: ${cartaPC.texto} ${cartaPC2.texto} - pontuacao ${pontuacaoPC}`)


      if (pontuacaoJog > pontuacaoPC) {
         console.log("O usuario ganhou!")

      } else if (pontuacaoJog == pontuacaoPC) {
         console.log("Empate!")
      } else {
         console.log("O computador ganhou!")
      }


   } else {
      "O jogo acabou!"
   }

}

console.log(partida())
