/*
// INTERPRETAÇÃO
// 1- LEIA O CODIGO

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

//  a) O que vai ser impresso no console?
// R: Vai retornar 3 objetos iguais só que  cada um com sua array, contendo todos os nomes..

// 2- LEIA O CODIGO ABAIXO

    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  console.log(novoArrayB)

// a) O que vai ser impresso no console?
// R:Vai ser impresso os nomes dentro de uma nova array.

// 3- LEIA O CÓDIGO ABAIXO

    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
// a) O que vai ser impresso no console?
// R: Vai imprimir todo array que não tenha o nome "Chijo"

// ==================================================================================================================
// ESCRITA!

// 1- Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize
//  as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

    // a) Crie um novo array que contenha apenas o nome dos doguinhos

    // b) Crie um novo array apenas com os [cachorros salsicha]

    // c) Crie um novo array que possuirá mensagens para enviar para
    //  todos os clientes que são poodles. A mensagem deve ser:
    //   "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
        ]

    // //A- APENAS COM NOMES
    // const arraySoNomes = pets.map((item, index, array) =>{
    //         return item.nome
    //     })
    //     console.log(arraySoNomes)

    // //B- APENAS SALSICHA
    // const arraySoSalsicha = pets.filter((item, index, array) => {
        //     return item.raca === "Salsicha"
        // })
        // console.log(arraySoSalsicha)

    // //C- MENSAGEM PARA TODOS OS POODLE
        // const arrayTodosPooble = pets.filter((item, index, array) =>{return item.raca === "Poodle"})

        // const mensagemTodosPooble = arrayTodosPooble.map((item, index, array)=> { return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`})
        // console.log(mensagemTodosPooble)


// ==================================================================================================================================================================

// 2- Dado o seguinte array de produtos, realize as operações pedidas nos 
// itens abaixo utilizando as funções de array map e filter:
    
    //a) Crie um novo array que contenha apenas o nome de cada item
        
    //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
    // aplicando 5% de desconto em todos eles
        
    //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
        
    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    
    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
    // Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    // //A- APENAS NOME DOS PRODUTOS
        // const nomeDosProdutos = produtos.map((item, index, array)=>{ return item.nome})
        // console.log(nomeDosProdutos)

    // //B- PREÇOS 5% MAIS BAIXO, APROVEITE A OFERTA!
        const porcentagem = produtos.map((item)=>{ return(item.preco * 0.95)})
        const nomes = produtos.map((item)=>{ return item.nome})
        let array = []
        function tabela(item1, item2){
        
            for(let i = 0; i < item1.length; i++){

               let objeto = {Nome: item1[i], Preço: item2[i]}
               array.push(objeto)
            }
            console.log(array)
        }
        tabela(nomes, porcentagem)


    // // C- APENAS OBJETOS COM NOME "BEBIDAS" 
    //     const bebidas = produtos.filter((item)=> {return item.categoria ==="Bebidas"})
    //     console.log(bebidas)

    // //D- APENAS OBJETOS COM NOME "YPÊ"
    //      const ype = produtos.filter((item)=> {
    //         if (item.nome.includes("Ypê"))
    //             return item.nome
    //         })
    //         console.log(ype)

    // //E- FRASE PARA VENDER IPÊ
    //     const fraseYpe = produtos.filter((item)=> {
    //         if (item.nome.includes("Ypê"))
    //             return item.nome
    //         })
    //     const novaFraseYpe = fraseYpe.map((item)=> {return `Compre ${item.nome} por ${item.preco}`})
    //     console.log(novaFraseYpe)
  
// =======================================================================================================================================================================================

// DESAFIO

// 1- Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

    // // a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
    //  const nomes = pokemons.map((item)=>{return item.nome})
    //  console.log(nomes.sort())

    // b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
    //   Primeiro metodo que pensei KKKKKKKKKKKKKK
        // const excluindo = pokemons.map((item)=>{return item.tipo})
        //     excluindo.splice(1, 2 )
        //     excluindo.splice(2,1)
        //     console.log(excluindo)

    // SEUNDA TENTATIVA: "NESSA ALEM DE MOSTRAR NOS TIPOS QUE TEM, ELE MOSTRA TAMBEM A QUANTIDADE!"
        // const tipo = pokemons.map((item)=>{return item.tipo})

        // let i =0
        // while(i<5){
        //     if(tipo[i] === "grama"){
        //         console.log('grama')
        //     }else if(tipo[i] === "fogo"){
        //          console.log("fogo")
        //     }else if(tipo[i] === "água"){
        //         console.log("água")
        //     }
        //     i++
        // }

    // TERCEIRO MODO E ESPERO QUE SEJA O CERTO!
        //  const tipo3 = pokemons.map((item)=> {return item.tipo})
        //  const tiposUnicos = tipo3.filter((item, index)=>{return tipo3.indexOf(item) === index})
        // console.log(tiposUnicos)


*/ 
