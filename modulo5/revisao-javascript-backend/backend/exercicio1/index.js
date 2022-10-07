console.log("exercicio 1");

// N °C + 273,15 = Resposta K - formula de graus para Kelvin
// (N °C × 9 /5) + 32 = Resposta °F

let escolha = 'F'   //'Digite F ou K para selecionar'
let numeroC = 25      //'Digite um numero'

const soma = () =>{

    if(escolha === 'K' ){
    return  numeroC + 273.15
    }else if(escolha === 'F'){
    return numeroC * 9 / 5 + 32
    }
}
 console.log(soma(numeroC))
