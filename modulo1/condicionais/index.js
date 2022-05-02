/*
// Interpretação

// 1 - leia o codigo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// R: O codigo faz um pergunta para o usuario pedindo um numero, depois ele pega esse numero que esta no formato de string e transforma em Number
// depois ele pega esse numero e divide por dois, se o numero for divisivel sem sobra var dar o resultado 0 que sera "True", então sera impresso
// "passou no teste", caso o numero tenha uma sobra, ele vai emprimir "Não passou no teste"


// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// R: numero pares

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// R: Numeros impares

// =======================================================================================================================================================

// 2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
// R: Serve para um leitor de codigo de barras de um mercado, para um estoque, funções que se pareça com essas!

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// R:2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break`
//  que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R:O preço da fruta  Pêra  é  R$  5

// ==========================================================================================================================

// 3- leia o codigo

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
-
console.log(mensagem)

// a) O que a primeira linha está fazendo?
// R: Pedindo um numero para o usuario e transformando em "Number"

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R: Se for 10 "Esse número passou no teste". Se for -10 não vai sair nada pq não tem o else!

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R: Esta dando erro, pq a variavel está dentro do escopo do if. 


// ==============================================================================================================================


// EXERCÍCIOS DE ESCRITA

// 1- Faça um programa que pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).

let idadeUsuario = Number(prompt("Digite sua idade!"))

if (idadeUsuario >= 18){
   console.log("Você pode dirigir!")
}else console.log("Você não pode dirigir!")


// -------------------------------------------------------------------------------------------------------------------------------

// 2- 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
  
let turno = prompt(`Para saber seu turno digite "M" para (Mautino), "V" para (Vespertino) e "N" para (Nourno) `).toUpperCase()

if (turno === "M"){
    console.log("Bom dia!")
}else if (turno === "V"){
    console.log("Boa tarde!")
}else if (turno === "N"){
    console.log("Boa Noite!")
}else console.log("Você digitou uma letra errda, tente novamente!")


// --------------------------------------------------------------------------------------------------------------------------------

// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno2 = prompt(`Para saber seu turno digite "M" para (Mautino), "V" para (Vespertino) e "N" para (Nourno) `).toUpperCase()

switch (turno2){    
case 'M':
    console.log("Bom dia!")
    break
case 'V':
    console.log("Boa tarde")
    break
case 'N':
    console.log("Boa noite!")
    break
    default:
        console.log("Você digitou uma letra errda, tente novamente!")
}


// ---------------------------------------------------------------------------------------------------------------------------------

// 4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só
//  assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
//  Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
//  o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//  Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima 
//  `"Escolha outro filme :("`

let generoDoFilme = prompt("Qual o genero do filme que vão assistir?").toUpperCase()
let valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoDoFilme === "FANTASIA" && valorDoIngresso < 15){
    console.log("Bom filme!")
}else console.log('Escolha outro filme :(')


// =================================================================================================================================

// DESAFIOS

// 1- Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
// "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar 
// (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu 
// [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let generoDoFilme = prompt("Qual o genero do filme que vão assistir?").toUpperCase()
let valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))
let lanche = prompt("Qual lanche você vai comprar?")

if (generoDoFilme === "FANTASIA" && valorDoIngresso < 15){
    console.log(`Bom filme e aproveite seu lanche: ${lanche}!`)
}else console.log('Escolha outro filme :(') 



// -------------------------------------------------------------------------------------------------------------------------------

// 2- Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
// Para esta compra, o usuário deve fornecer algumas informações:

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
// Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o 
// usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
// Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
// Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
// multiplicados pelo valor do dólar (considerar o dólar = R$4,10)


let nome = prompt("Qual o seu nome completo?")
let tipoDeJogo = prompt('Vai comprar jogo internacional ou domestico?').toUpperCase()
let etapa = prompt('Digite "SF" para semi-final "DT" para decisão do terceiro lugar e "FN" para Final').toUpperCase()
let categoria = Number(prompt('Qual categoria? "1, 2, 3 ou 4 "'))
let quantidadeDeIngresso = Number(prompt('Quantos ingressos você vai querer?'))

let preçoSF = [1320, 880, 550, 220]
let preçoDT = [660, 440, 330, 170]
let preçoFN = [1980, 1320, 880, 330]

// ----------------------------------------------------------------------------------------------DISPUTA 3º INTERNACIONAL
if (tipoDeJogo === "INTERNACIONAL" && etapa === "DT" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[0] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[0] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "DT" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[1] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[1] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "DT" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[2] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[2] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "DT" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[3] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[3] * quantidadeDeIngresso * 4.10}`)
  // ---------------------------------------------------------------------------------------------SEMI-FINAL INTERNACIONAL
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "SF" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[0] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[0] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "SF" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[1] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[1] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "SF" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[2] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[2] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "SF" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[3] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[3] * quantidadeDeIngresso * 4.10}`)
  // --------------------------------------------------------------------------------------------------FINAL INTERNACIONAL
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "FN" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[0] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[0] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "FN" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[1] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[1] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "FN" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[2] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[2] * quantidadeDeIngresso * 4.10}`)
}
else if (tipoDeJogo === "INTERNACIONAL" && etapa === "FN" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso U$${preçoDT[3] * 4.10}`)
  console.log(`Total a pagar: U$${preçoDT[3] * quantidadeDeIngresso * 4.10}`)
  // -----------------------------------------------------------------------------------------------DISPUTA 3º = DOMÉSTICO
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "DT" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[0]},00`)
  console.log(`Total a pagar: R$${preçoDT[0] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "DT" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[1]},00`)
  console.log(`Total a pagar: R$${preçoDT[1] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "DT" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[2]},00`)
  console.log(`Total a pagar: R$${preçoDT[2] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "DT" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[3]},00`)
  console.log(`Total a pagar: R$${preçoDT[3] * quantidadeDeIngresso},00`)
  // ---------------------------------------------------------------------------------------------SEMI-FINAL INTERNACIONAL
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "SF" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[0]},00`)
  console.log(`Total a pagar: R$${preçoDT[0] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "SF" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[1]},00`)
  console.log(`Total a pagar: R$${preçoDT[1] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "SF" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[2]},00`)
  console.log(`Total a pagar: R$${preçoDT[2] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "SF" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[3]},00`)
  console.log(`Total a pagar: R$${preçoDT[3] * quantidadeDeIngresso},00`)
  // --------------------------------------------------------------------------------------------------FINAL INTERNACIONAL
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "FN" && categoria === 1){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[0]},00`)
  console.log(`Total a pagar: R$${preçoDT[0] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "FN" && categoria === 2){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[1]},00`)
  console.log(`Total a pagar: R$${preçoDT[1] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "FN" && categoria === 3){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[2]},00`)
  console.log(`Total a pagar: R$${preçoDT[2] * quantidadeDeIngresso},00`)
}
else if (tipoDeJogo === "DOMESTICO" && etapa === "FN" && categoria === 4){     
  console.log("---- Dados do ingresso ----") 
  console.log(`Nome do cliente: ${nome}`)
  console.log(`Tipo de jogo: ${tipoDeJogo}`)
  console.log(`Etapa do jogo: ${etapa}`)
  console.log(`Categoria: ${categoria}`)
  console.log(`Quantidade de ingresso: ${quantidadeDeIngresso}`)
  console.log('--- Valores ---')
  console.log(`Valor do ingresso R$${preçoDT[3]},00`)
  console.log(`Total a pagar: R$${preçoDT[3] * quantidadeDeIngresso},00`)
}else console.log("Não utilize pontuação, tente novamente!")


*/

