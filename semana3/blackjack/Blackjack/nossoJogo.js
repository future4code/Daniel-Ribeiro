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

  /*alert('Bem vindo ao BlackJack')

 //início do jogo

 if (confirm('Quer iniciar uma rodada?')) {

   //comprando cartas jogador
   let cartaUmUsuario = comprarCarta() 
   let cartaDoisUsuario = comprarCarta()

   //comprando cartas computador
   let cartaUmComputador = comprarCarta()
   let cartaDoisComputador = comprarCarta()

   //somando e gardando resultado 
   totalUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
   totalComputador = cartaUmComputador.valor + cartaDoisComputador.valor

   //mostra as cartas e a pontuação de cada jogador
   console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - pontuação: ${String(totalUsuario)}`)
   console.log(`Computador - cartas: ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação: ${String(totalComputador)}`)

   //faz a comparação entre os resultados dos usuários e imprime o resultado, se foi empate, vitória ou derrota.
   if (totalUsuario > totalComputador) {
      console.log('Usuário ganhou!')
   } else if ( totalUsuario < totalComputador) {
      console.log('Computador venceu!')
   } else {
      console.log('Empate.')
   }
 } else {
    console.log('O jogo terminou.') //fim do jogo
 } */