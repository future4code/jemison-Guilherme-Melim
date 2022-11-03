type Persona = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Cores {
    AMARELO = 'AMARELO',
    BRANCO = 'BRANCO',
    PRETO = 'PRETO',
    AZUL = 'AZUL',
}

const pessoa1 : Persona = {
    nome: 'Guilherme',
    idade: 25,
    corFavorita: Cores.AZUL
}

const pessoa2 : Persona = {
    nome: 'Vanessa',
    idade: 29,
    corFavorita: Cores.PRETO
}

const pessoa3 : Persona = {
    nome: 'Lisa',
    idade: 45,
    corFavorita: Cores.BRANCO
}

console.log(pessoa1, pessoa2, pessoa3)