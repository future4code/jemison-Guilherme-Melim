// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b)=> a - b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
 array.filter((item)=>{
     if(item %2 === 0)
     par.push(item)
    })
 
  return par
//   DESAFIO: NÃO SEI SE VALE, POIS ESTAVA ESPECIFICADO APENAS SEM O FILTER()
// let par2 = []
// array.map((item)=>{
//     if(item %2 === 0)
//     par2.push(item)
//    })

//  return par2
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par = []
  array.map((item)=>{
        if(item %2 === 0)
        par.push(item * item)
       })
       return par
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++)
        if (array[i]> maior){
            maior = array[i]
        }
        
        return maior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num2
let maior1
let maior2
  if(num1 / num2){
    return maior1
  }else{return maior2}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let par = []
    array.filter((item)=>{
        if(item %2 === 0)
        par.push(item)
       })
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
    return "Equilátero"
}else if (ladoA === ladoB && ladoB !== ladoC || ladoB === ladoC && ladoA !== ladoB || ladoA === ladoC && ladoA !== ladoB){
     return "Isósceles"
}else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}