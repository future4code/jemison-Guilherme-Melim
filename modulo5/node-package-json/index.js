// Para acessar os parâmetros: process.argv[]
/*
const nome = 'Guilherme'
const idade = Number(25)
const seteAnos = Number(7)
const soma = idade + seteAnos

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`)
*\

// ==================================================================== Exercicio 2
/*
const sinal = process.argv[2]
const numbUm = Number(process.argv[3])
const numbDois = Number(process.argv[4])

const opreracao = () =>{
switch(sinal){
    case 'soma':
      return numbUm + numbDois
    break
    case 'mult':
      return numbUm * numbDois
    break
    case 'div':
      return numbUm / numbDois
    break
    case 'menos':
      return numbUm - numbDois
     break
    default:
      return 'Escola uma operação existente.'
    break
}
}
console.log(opreracao())
*/
// ============================================================================== Exercicio 3

const adicional = process.argv[2]
const tarefas= [
    'Lavar a louça',
    'Varrer a casa',
    'Passar pano'
]

 tarefas.push(adicional)

console.table(tarefas)