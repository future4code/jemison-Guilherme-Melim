const arrayDeNumeros : number[] = [21, 18, 65, 44, 15, 18]

function obterEstatisticas(numeros: any) {

    const numerosOrdenados: any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    

    return estatisticas
}

console.log(obterEstatisticas(arrayDeNumeros))