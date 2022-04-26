// Exercicio escrita 1


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// Primeira saida vai dar resultado 10
// segunda saida vai dar resultado 50


// b) O que aconteceria se retirasse os dois `console.log` e simplesmente 
// invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Não imprimiria o resultado, mas a função iria funcionar normalmente.


// Exercicio escrita 2 --------------------------------------------------------------------------------------------

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// A função deica toda a frase em minusculo, e verifica se tem a palavra "cenoura" dentro da frase! 


// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`  "eu gosto de cenoura - true"
//      ii.  `CENOURA é bom pra vista` "cenoura é bom pra vista - true"
//      iii. `Cenouras crescem na terra` "cenouras crescem na terra - true"



// ======================================================================================================================

// Exercicio escrita 
// 1 - Escreva as funções explicadas abaixo:
    
    // a) A função não deve receber nenhum parâmetro e deve imprimir 
    // uma mensagem falando algumas informações sobre você, como:

//     function sobreMim(){
//         console.log('"Eu sou Guilherme, tenho 25 anos, moro em São Paulo e sou estudante da Labenu."')

//     }

// sobreMim()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//  o nome (string), a idade (number), a cidade (string) e uma profissão (string).
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:


// function informaçõesUsuario (nome, idade, cidade, profissão){

// nome = prompt(`Qual o seu nome?`)
// idade = Number (prompt(`Qual a sua idade?`))
// cidade = prompt('Onde você mora?')
// profissão = prompt ('Qual a sua profissão?')

// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)

// }
 
// informaçõesUsuario()

// ==================================================================================================================

// 2 -2. Escreva as funções explicadas abaixo:
    
  // a) Escreva uma função que receba 2 números como parâmetros, e
  // dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e 
  // imprima no console o resultado.

//     function somaDeNumeros(numero1, numero2){

//  let soma = numero1 + numero2

//  console.log(soma)

//     }
//  somaDeNumeros(4,5)

 // b) Faça uma função que recebe 2 números e retorne um booleano que informa 
 //  se o primeiro número é maior ou igual ao segundo.

//  function numeroMaiorOuIguais(nume1, nume2){

//     maiorOuigual = nume1 >= nume2
//     console.log(maiorOuigual)

//  }

// numeroMaiorOuIguais(2,4)
// numeroMaiorOuIguais(8,4)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numeroPar(numer1){

//  eDivididoPorDois = (numer1 %2 === 0 )
//     console.log(eDivididoPorDois)

//  }
// numeroPar(123456778)



// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o 
// tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function mensagemMaiuscula (mensagem){
//   frase = ('Eu AMO chocolate, me faz pesar quando não acho RESPOSTAS!')
// fraseMaiuscula = frase.toUpperCase()
// contaDaFrase = frase.length
//   console.log(fraseMaiuscula, contaDaFrase)
// }
// mensagemMaiuscula()



// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 
// funções com esses valores imputados pelo usuário sendo o argumento.
// Por fim, mostre no console o resultado das operações:

function operacoes (soma, subtração, multiplicação, divisão){
 n1 = Number (prompt('Digite um numero!'))
 n2 = Number (prompt('Digite outro numero!'))
 
 soma = n1 + n2
 subtração = n1 - n2
 multiplicação = n1 * n2
 divisão = n1 / n2

 console.log(`Resultado dos dois numeros ${n1} e ${n2} em:
  Soma: ${soma}  
  Subtração: ${subtração}  
  Multiplicação: ${multiplicação}  
  Divisão ${divisão} `)

}


operacoes()










