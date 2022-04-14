// Exercicio escrita de codigo.

// 1 - 
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.
//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let nome = ("guilherme");
let idade = 25;

//c) Imprima na tela o tipo dessas variáveis que acabou de criar

typeof nome
typeof idade 

console.log(typeof nome);
console.log(typeof idade);

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// R: Aqui Foi immpresso o "nome" como string porque está entre "", e a "idade" como Number porque está apenas o numero.

//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

const nomePergunta = prompt("Qual seu nome?");
const minhaIdade = prompt("Qual a sua idade?")

typeof nomePergunta
typeof minhaIdade

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nomePergunta);
console.log(typeof minhaIdade);

//Sempre lembrar de colocar o comando "typeof" dentro fodos (), lembrar das virgulas e aspas.

//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos".
//Onde nome e idade são os valores que o usuário inseriu

console.log("Olá", nome, "você tem", idade, "anos.")

// 2 - Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 

const perguntaUmWeb = prompt("Você está gosta de carro?")
const perguntaDoisWeb = prompt("Você gosta de praia?")
const perguntaTresWeb = prompt("Gosta de ficar em casa?")

//a) Crie três novas variáveis, contendo as respostas
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

const perguntaUm = ("Você está gosta de carro?")
const perguntaDois = ("Você gosta de praia?")
const perguntaTres = ("Gosta de ficar em casa?")

const respostaCarro = ("Sim")
const respostaPraia = ("sim")
const respostaCasa = ("Não")

console.log(perguntaUm, respostaCarro)
console.log(perguntaDois, respostaPraia)
console.log(perguntaTres, respostaCasa)

// 3- Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25
console.log("Valor de A é:", a)
console.log("Valor de B é:", b)

//Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a. 
//Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.

c = a
a = b
b = c

console.log("O novo valor de A é:", a)
console.log("O novo valor de B é:", b)

