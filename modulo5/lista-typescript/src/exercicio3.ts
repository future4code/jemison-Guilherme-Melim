type Films = {
    name:string
    year:number
    genre:string
    score:number
}

enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

const optionFilter = (nome:string ,ano:number, genero:any, pontuacao?:number) =>{

    const movie : Films = {
        name: nome,
        year: ano,
        genre: genero,
        score: pontuacao
    }

  return movie
}

console.log(optionFilter("Circulo de fogo",2014,GENERO.ACAO,89))