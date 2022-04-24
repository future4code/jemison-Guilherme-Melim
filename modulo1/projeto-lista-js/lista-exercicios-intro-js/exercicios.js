// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 
  let altura = Number (prompt("Digite a altura do triangulo!"))
  let largura = Number (prompt("Digite a largura do triangulo!"))

  areaDoTriangulo = (altura * largura)
console.log(areaDoTriangulo)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Qual o ano atual?"))
  let AnoNacimento = Number(prompt("Que ano você nasceu?"))

saida = anoAtual - AnoNacimento

console.log(saida)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let IMC = (peso/(altura*altura));
 
  return IMC;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt("Digite seu nome!")
  let idade = Number(prompt("Digite sua idade!"))
  let email = prompt("Digite seu email!")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("cores favorita 1")
let cor2 = prompt("core favorita 2")
let cor3 = prompt("core favorita 3")

console.log([cor1, cor2, cor3])


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui


 return (string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

 vendas = (custo/valorIngresso)
return vendas
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 return (array[array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let um = array[0]
  let dois = array[array.length - 1]
  let tres = um
  array[0] = dois
  array[array.length - 1] = tres

return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 let um = string1.toUpperCase()
 let dois = string2.toUpperCase()
return (um === dois)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

let anoNascimento = Number (prompt("Digite o ano que nasceu!"))
let anoAtual = Number (prompt("Digite o ano atual!"))
let anoEmissorRg = Number (prompt("Digite o ano de emissão do RG!"))

let idade = anoAtual - anoNascimento
let anosDeEmissao = anoAtual - anoEmissorRg

let renova1 = idade <= 20 && anosDeEmissao / 5 >= 1
let renova2 = idade > 20 && idade <= 50 && anosDeEmissao / 10 >= 1
let renova3 = idade > 50 && anosDeEmissao / 15 >= 1

 console.log(renova1 || renova2 || renova3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 let idade = prompt("Você é maior de idade?")
 let ensino = prompt("Tem ensino médio completo?")
 let horario = prompt("Tem disponibilidade de horario?")




 
 confirmar = (idade && ensino && horario)

 console.log(confirmar)
  return confirmar
 



}
