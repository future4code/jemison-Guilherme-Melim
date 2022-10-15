const digitado = process.argv[2]

function checaAnoBissexto(ano:any):boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log(checaAnoBissexto(digitado))

/*Usei o ANY pois foi o unico jeito que encontrei para fazer o "process.argv", mas caso for
errado, e só excluir a linha 1 e digitar um numero dentro da function na linha 9!...*/