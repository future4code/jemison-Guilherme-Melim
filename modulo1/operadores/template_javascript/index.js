// Exercicios de interpretação.

// 1------------------------------------------------

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. Resultado é falso. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. Resultado é falso. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. Resultado verdadeiro. ", resultado)

// console.log("d. é um boolean. ", typeof resultado)

// 2---------------------------------------------------------

// const primeiroNumero = Number (prompt("Digite um numero!"))
// const segundoNumero = Number (prompt("Digite outro numero!"))

// let soma = primeiroNumero + segundoNumero

// console.log(soma)

// Resposta: Era só colocar as variaveis como number!


// execicios de ESC

//---------------------------------------------------------------------
// Exercicio 1 - 1. Faça um programa que:
    
// a) Pergunte a idade do usuário.
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga.
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
//-------------------------------------------------------------------------

let idadeUsuario = Number (prompt("Qual a sua idade?"));
let idadeAmigo = Number (prompt("Qual a idade so seu melhor amigo/a ?"));

let resultado = idadeUsuario >= idadeAmigo 

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log( "A diferença de idade entre as pessoas é de:", idadeUsuario - idadeAmigo)

//OBS: SE DER NEGATIVO SIGNIFICA QUE O "IDADEUSUARIO" É MAIS NOVO QUE SEU AMIGO!


//---------------------------------------------------------------------
// // Exercicio 2 - Faça um programa que:
    
//a) Peça ao usuário que insira um número **par**    
//b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//----------------------------------------------------------------------


let usuarioPar = Number (prompt("Coloque um numero par!"));

console.log(usuarioPar % 2)

// Aqui se tem um padrão, todo numero par vai dar um resultado de 0, pois não tem resto qunado se divide um numero par por 2.
// E quando se tem nuemro impar o resultado sempre sera um, pois vai existir um resto.

//--------------------------------------------------------------------
// Exercicio 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
// a) A idade do usuário em meses    
// b) A idade do usuário em dias
// c) A idade do usuário em horas

const usuarionome =  prompt("Qual seu nome?")
const usuarioAnos = Number (prompt("Quantos anos você tem?"))

let resultadoMeses = usuarioAnos * 12
let resultadoDias = resultadoMeses * 29
let resultadoHoras = resultadoDias * 24


console.log(usuarionome, "tem", usuarioAnos, "anos,", resultadoMeses, "meses,", resultadoDias, "dias e", resultadoHoras, "horas de vida!" );

//Coloquei a primeira pergunta como nome pois achei que ficou melhor a frase!
//Ia fazer um calculo para saber quantos anos a pessoa já viveu, porém com os comandos passado só da para fazer a médio, pois tem ano bisestos!

//------------------------------------------------------------------------
//Exercicio 4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no 
//console as seguintes mensagens seguidas pelo true ou false:

// C true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true
// obs: O true ou false vai depender dos números inseridos e do resultado das operações.
//---------------------------------------------------------------------------


let numeroUm = Number (prompt("Digite um numero!"))
let numeroDois = Number (prompt("Digite mais um numero qualquer!"))

let resultado4

console.log("Primeiro numero é:",numeroUm, "Segundo numero é:", numeroDois)

resultado4 = numeroUm === numeroDois
console.log("O primeiro numero é igual ao segundo?", resultado4)

resultado4 = numeroUm >= numeroDois
console.log("O primeiro numero é divisível pelo segundo?", resultado4)
//Para dar verdade o primeiro numero tem que ser maior que o segundo!

resultado4 = numeroDois <= numeroUm 
console.log("O segundo numero é divisível pelo primeiro?", resultado4)
// Para dar verdadeiro o segundo numero tem que ser maior que o primeiro!

//SE AMBOS DOS NUMEROS FOREM IGUAIS, DARA TUDO "TRUE" NO RESULTADO!
