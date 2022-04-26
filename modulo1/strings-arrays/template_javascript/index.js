// exercicio de interpretação 1 -------------------------------------------


// let array
// console.log('a. ', array)
// //Return = indefinido

// array = null
// console.log('b. ', array)
// // Return = Null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // Return = 11

// let i = 0
// console.log('d. ', array[i])
// // Return = 0

// array[i+1] = 19
// console.log('e. ', array)
// // Return = ???

// const valor = array[i+6]
// console.log('f. ', valor)
// //Return = 9

// exercicio 2 ---------------------------------------------------------------
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Return = SUBI NUM ONIBUS EM MIRROCOS 27

// =====================================================================================================================

// Exercicio escrita de codigo 1 ----------------------------------------------------------------------------

// let nome = prompt("Qual seu nome?");
// let email = prompt("Qual o seu email?");

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//------------------------------------------------------------------------------------------------------------
//Exercicio 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:
    // a) Imprima no console o array completo

// let comidas = ["Macarrão", "Churrasco", "Pizza", "Chocolate", "Haburguer"]
// console.log(comidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: " 
//seguida por cada uma das comidas, uma embaixo da outra.

// console.log(`Essas são minhas comidas preferidas:`)
// console.log(comidas [0])
// console.log(comidas [1])
// console.log(comidas [2])
// console.log(comidas [3])
// console.log(comidas [4])

// //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda 
// //comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

// let comidaUsuario = prompt("Qual sua comida preferida?")
// comidas.splice(1, 1, comidaUsuario)
// console.log(comidas)

//-------------------------------------------------------------------------------------------------------------------

// 3- Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

// let listaDeTarefas =[]

// //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// let tarefa1 = prompt("Escreva 1 tarefas!")
// let tarefa2 = prompt("Escreva 2 tarefas!")
// let tarefa3 = prompt("Escreva 3 tarefas!")
// listaDeTarefas = [tarefa1, tarefa2, tarefa3]


// //c) Imprima o array no console

// console.log(listaDeTarefas)

// //d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

// let indiceUsuario = prompt("Escolha um numero de 0 a 2")

// //e) Remova da lista o item de índice que o usuário escolheu.

// listaDeTarefas.splice(indiceUsuario, 1)

// //f) Imprima o array no console
// console.log(listaDeTarefas)

//===================================================================================================

// Desafio numero 1

let frase = prompt("digite uma frase!")

quatidades = [frase]

console.log(quatidades)




//Desafio Numero 2

// let frutas = ["banana", "morango", "abacaxi", "laranja", "ameixa"]
 
// console.log(frutas.indexOf("abacaxi"))

// console.log(frutas.length)






