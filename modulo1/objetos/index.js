// Interpretação
// 1 -
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
// saida 1 (Matheus Nachtergaele)
// saida 2 ("Virginia Cavendish")
// saida 3 (Canal: Globo, Horario: 14h)

// ==================================================================================================
/*
// 2 -

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a- o que vai ser impresso no console?
// saida 1 (nome: "Juca", idade: 3, raca: "SRD")
// saida 2 (nome: "Juba", idade: 3, raca: "SRD")
// saida 3 (nome: "Jubo", idade: 3, raca: "SRD")

// b- o que faz a sintaxe dos três pontos antes do nome de um objeto?
// R: Ela pode tanto adicionar, ou trocar um objeto.
// =================================================================================================

// 3-

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a- o que vai ser impresso no console?
// saida 1 (false) 
// saida 2 (undfined)

// b- Explique o valor impresso no console. Você sabe por que isso aconteceu?
// R: Aconteceu a função se pede para retornar o objeto, e nesse caso é o "backender" e ele está atribuindo o false.

// ===========================================================================================================================

// Exercicios escita

// 1 -1. Resolva os passos a seguir: 
    
    // a) Crie um objeto. Ele deve conter duas propriedades:
	//  nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
	//  Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const euUm ={
nome: "Guilherme",
apelido: ["Azevedo", " Boto", " Gui"]
}


function recebendoFrase (euUm) {
console.log(`Eu sou ${euUm.nome}, mas pode me chamar de: ${euUm.apelido}`)
}

recebendoFrase(euUm)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade
//  nome, mas com uma nova lista de três apelidos.
//  Depois, chame a função feita no item anterior passando como argumento o novo objeto

const euDois = {
	...euUm,
	apelido: ["Melim", " Atleta", " Piloto"]
}

recebendoFrase(euDois)

// =====================================================================================================


// 2 - Resolva os passos a seguir:
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

let dadosFilho ={
	nome: "Guilherme",
	idade: 25,
	profissao: "Desenvolvedor"
}

	let dadosPai ={
	nome: "Alberto",
	idade: 54,
	profissao: "Autonomo"
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function paiEFilho (dados){
let minhaFuncao = (Array(dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length ))
 return console.log(minhaFuncao)
}

paiEFilho(dadosFilho)
paiEFilho(dadosPai)
// ====================================================================================================================================




// 3. Resolva os passos a seguir:
//   a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
//  nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
 
const frutaUm ={
	nome: "banana",
	disponibilidade: true
}

const frutaDois ={
	nome: "maça",
	disponibilidade: true
}

const frutaTres ={
	nome: "Uva",
	disponibilidade: true
}


    // c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
	//  Invoque essa função passando os três objetos criados. 

	function recebendoFrutas (fruta){

     return carrinho.push(fruta)
	}
	recebendoFrutas(frutaUm)
	recebendoFrutas(frutaDois)
	recebendoFrutas(frutaTres)

	//  carrinho = [recebendoFrutas(frutaUm)]
    // d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

	console.log(carrinho)
     
      */
	 
	// ============================================================================================================================


