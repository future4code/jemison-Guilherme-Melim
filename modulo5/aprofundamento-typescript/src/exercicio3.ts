type Pessoa = {
  autor:string,
  texto:string
}

const posts: Pessoa[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

//Não consegui identificar a saida da função...
function buscarPostsPorAutor(posts:Pessoa[], autorInformado:string) {
    return posts.filter(
      (post:Pessoa) => {
        return post.autor === autorInformado
      }
    )
}

console.table(buscarPostsPorAutor(posts, 'Dobby'))