const digitado = process.argv[2]

function checaAnoBissexto(ano:any):boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log(checaAnoBissexto(digitado))

/*Usei o ANY pois foi o unico jeito que encontrei no momento para finalizar o exercicio,
depois busco uma outra solução...*/