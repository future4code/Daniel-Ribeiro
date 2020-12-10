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
 
 alert('Bem vindo ao BlackJack')

 //início do jogo

 if (confirm('Quer iniciar uma rodada?')) {

   //comprando cartas jogador
   let cartaDoUsuario = [comprarCarta(), comprarCarta()]
   let cartaDoComputador = [comprarCarta(), comprarCarta()]

   //Fiz essa verificação, mas acho que não está correta.
   //Verificação de Ases
      if (cartaDoUsuario[0].texto === 'A' && cartaDoUsuario[1].texto === 'A'){
         //comprando cartas novamente
         cartaDoUsuario = [comprarCarta(), comprarCarta()]
      } else if (cartaDoComputador[0].texto === 'A' && cartaDoComputador[1].texto === 'A') {
         cartaDoComputador = [comprarCarta(), comprarCarta()]
      }
    

   //somando e gardando resultado 
   totalUsuario = cartaDoUsuario[0].valor + cartaDoUsuario[1].valor
   totalComputador = cartaDoComputador[0].valor + cartaDoComputador[1].valor

   
   //guardando mensagem com valor das cartas dentro da varável mensagem
   mensagem = [`Suas cartas são: ${cartaDoUsuario[0].texto} ${cartaDoUsuario[1].texto}`, 
   ` A carta revelada do computador é: ${cartaDoComputador[0].texto}`, ' Deseja comprar mais cartas?']

   i = 2 //para adicionar do índex dois pra frente 
   //adicionando mais cartas par ao usuário
   while (confirm(mensagem) === true && (totalUsuario <= 21)) {
      cartaDoUsuario[i] = comprarCarta();
      totalUsuario += cartaDoUsuario[i].valor;
      mensagem[0] += ' ' + cartaDoUsuario[i].texto
      i++
   }

   i = 2 //para adicionar do índex dois pra frente
   //adicionando mais cartas para o computador
   while (totalComputador) {
      
      if (totalComputador < totalUsuario) {
         cartaDoComputador[i] = comprarCarta()
         totalComputador += cartaDoComputador[i].valor
         mensagem[1] += ' ' + cartaDoComputador[i].texto
         console.log(cartaDoComputador[i].valor)
         i++
      } else if (totalComputador >= totalUsuario){
         break;
      }
   }
   

   //resultado
   if (totalComputador > 21 && totalUsuario <= 21) {
      resultado ='Você ganhou!'
   } else if (totalUsuario === totalComputador) {
      resultado = 'Deu empate.'
   } else if (totalUsuario > 21) {
      resultado = 'Você perdeu, tente outra vez.'
   } else if (totalComputador > totalUsuario && totalComputador < 21){
      resultado = 'O computador ganhou.'
   }

   //dicionando os ítens do array cartaDoComputador em itensComputador
   itensComputador = ""
   for (elemento of cartaDoComputador) {
      itensComputador += `${elemento.texto} `
   }
   
   //Imprimindo o resultado
   alert(mensagem[0] + `, Sua pontuação é ${totalUsuario}.` + '\n' + `As cartas do computador foram: ${itensComputador}, a pontuação do computador é: ${totalComputador}. ${resultado}`)
  
 } else {
    alert('Fim de jogo.')
 }
 


