const amostraDeIdades : number[] = [21, 18, 65, 44, 15, 18]

//A entrada da função é de uma Array, então a função ela é uma array e number.

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    

    return estatisticas
}

console.log(obterEstatisticas(amostraDeIdades))