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

    if(confirm ('Vamos começar nossa rodada de BlackJack?')) {
      let verdade = false
      while (!verdade){
            const carta1Usuario = comprarCarta();
            const carta2Usuario = comprarCarta();
            const carta1PC = comprarCarta();
            const carta2PC = comprarCarta();
       
         if((carta1Usuario === 11 && carta2Usuario === 11 ) || (carta1PC === 11 && carta2PC === 11)){
            const carta1Usuario = comprarCarta();
            const carta2Usuario = comprarCarta();
            const carta1PC = comprarCarta();
            const carta2PC = comprarCarta();
         }else (verdade = true)  
          
      }   
      let pontosUsuario = carta1Usuario.valor + carta2Usuario.valor

         if(pontosUsuario > 21){
          false
         }
         else if(confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?")){
          true 
          }
          else if(confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
          "\n"+ 
          "Deseja comprar mais uma carta?")){
            true 
         }
          else if(confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
            "\n"+ 
          "Deseja comprar mais uma carta?")){
          true 
         }

   }
      
   
   
   
   
   
   
   
   
   
    
   








































    // console.log(cartaUmUsuario.valor)
         // console.log(cartaDoisUsuario.valor)
         // console.log(cartaUmPC.valor)
         // console.log(cartaDoisPC.valor)
