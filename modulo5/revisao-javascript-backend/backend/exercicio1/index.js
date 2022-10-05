console.log("exercicio 1");

// N °C + 273,15 = Resposta K - formula de graus para Kelvin
// (N °C × 9 /5) + 32 = Resposta °F

let escolha = 'K'   //'Digite F ou K para selecionar'
let numeroC = 25      //'Digite um numero'

const soma = () =>{

    if(escolha === 'K'){
    const respostaK = numeroC + 273.15
    return respostaK
    }else if(escolha === 'F'){
    const respostaF = numeroC * 9 / 5 + 32
    return respostaF
    }
    
}
 console.log(soma(numeroC))
