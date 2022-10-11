// ==================================================================== Exercicio 2
// Para rodar a aplicação digite: npm run operacao "tipo da operação" "numb1" "numb2"

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
