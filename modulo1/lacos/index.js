/*
// INTERPRETAÇÃO
// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// R: A função está fazendo uim loop até atingir ao cinco, e vai somando conforme 
// os resultados que vão dando. "faz o loop é soma ao mesmo tempo!"


//  2-Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
console.log(lista)
// a) O que vai ser impresso no console?
// R: 19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
// o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// R: não, sem o (.lenght) não teria como acessar o indice!



// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// R: Vai ser impresso 4 linhas de "*" sempre aumentando a quantidade de "*" por cada linha a mais.


// ====================================================================================================================

// ESCRITA

// 1- Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
//  um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

let juntosUm = []

let bichinhos = Number(prompt("Quantos bichinhos você tem?"))
let quantidade = 0

while (quantidade < bichinhos){
 let nomes = (prompt("Qual o nome do seu bichinho?"))
  juntosUm.push(nomes)
 quantidade++
}
console.log(juntosUm)

if(bichinhos === 0){
  console.log("Que pena! Você pode adotar um pet!")
 }
// -----------------------------------------------------------------------------------------------------------------------------

// 2- Considere que você tenha acesso a um `array`  (chamado de 'array original')
//  que é composto somente de números. Baseando-se nisso, crie uma função para cada 
// um dos itens abaixo, realizando as operações pedidas:
    
    // a) Escreva um programa que **imprime** cada um dos valores do array original.

      const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
      for(let i = 0; i <= 11; i++){
      console.log(array[i])
      }
     
    // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

      const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 
      for(let i = 0; i <= 11; i++){
      console.log(array[i] / 10)
     }
    // c) Escreva um programa que **crie** um novo array contendo, somente, os números pares 
    // do array original e **imprima** esse novo array

     const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
     let juntoC = []
      for(let i = 0; i <= 11; i++){
        let pares = (array[i] % 2)

        if(pares === 0){
          [array [i]]
          juntoC.push(array[i])
        }
      }
      console.log(juntoC)

    // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    // "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
      
      let juntoD = []

      const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

      for(let i = 0; i <= 11; i++){
        let = resposta =(`O elemento do índex ${i} é: ${array[i]} `)
        juntoD.push(resposta)
    }
    console.log(juntoD)
    
    // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

       let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
          let maior = array[0]
          for(let i = 0; i < array.length ; i++){
            if (array[i] > maior){
              maior = array[i]
              }
          }

       let menor = array[0]
       for(let i = 0; i < array.length ; i++){
         if (array[i] < menor){
           menor = array[i]
           }
       }
     console.log(`O maior numero é ${maior} e o menor numero é ${menor}`)
     
// ==========================================================================================================================================

// DESAFIO

// 1- Resumo do que se pede: "Faça um jogo de adivinhar o numero entre dois jogadores!"

let jogadorUm = Number(prompt("Digite um numero sem seu oponente ver!"))
  console.log("Agora vamos jogar!")
 
let jogadorDois = Number(prompt("Adivinhe o numero que foi digitado pelo seu oponente!"))




// function loop (jogadorUm, jogadorDois){
  while (jogadorUm < jogadorDois){
    if (jogadorUm < jogadorDois){
      console.log('Tente novamente um numero MENOR!')
      }else if (jogadorUm > jogadorDois){
        console.log('tente novamente um numero MAIOR!')
      }else (jogadorUm == jogadorDois)
        console.log('agora foi')

  }
// }
loop(jogadorUm, jogadorDois)



let numeroDigitadoMenor = [
  "Posha, quase lá, tente um numero maior!",
  "Na trave, tente um numero maior!",
  "Quase lá, mais um numero maior!"
  ]
let numeroDigitadoMaior = [
  "Foi longe, tente um numero menor!",
  "Na trave, chute um pouco mais Baixo!",
  "Esta muito perto, abaixa mais um pouco que você acerta!"
]

for(let i = 0; i <= 11; i++){
  
  if(jogadorUm > jogadorDois){
   console.log(Number(prompt(numeroDigitadoMenor[i])))
  }
  else if (jogadorUm < jogadorDois){
    console.log(Number(prompt(numeroDigitadoMaior[i])))
  }

}
*/