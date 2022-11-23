import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from "./connection";

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1 ================================================================
// a) Explique como é a resposta que temos quando usamos o raw. 
// R: Retorna o que estamos pedindo no banco de dados.

// b) Faça uma função que busque um ator pelo nome;
app.get("/actor", async(req:Request, res:Response):Promise<void>=>{
    const nome = req.query.nome
    let resultado

    try{
        if(nome){
           resultado = await connection.raw(
                `
                SELECT * FROM Actor WHERE nome = "${nome}"
                `
            )
        }else{
            resultado = await connection.raw(
                `
                SELECT * FROM Actor
                `
            )
        }

        res.status(200).send(resultado[0])
    }catch(error:any){
        console.log(error.message)
    }
})

// c) Faça uma função que receba um gender retorne a quantidade de itens na 
// tabela Actor com esse gender. Para atrizes, female e para atores male.

app.get('/gender',async(req:Request, res:Response):Promise<void>=>{
    const gender = req.query.gender
    let resultado

    if(gender){
        resultado = await connection.raw(
            `
            SELECT COUNT (*) FROM Actor WHERE gender = "${gender}"
            `
        )
    }else{
        resultado = await connection.raw(
            `
            SELECT * FROM Actor
            `
        )
    }

    res.status(200).send(resultado[0])
})


// Exercicio 2 ================================================================

// a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
app.patch('/salario',async(req:Request, res:Response):Promise<void>=>{
    
        await connection("Actor")
          .update({
            salary: req.body.salary,
          })
          .where("id", req.query.id);

  res.status(200).send("Salario atualizado com sucesso")
})

// b) Uma função que receba um id e delete um ator da tabela
app.delete('/deletar', async(req:Request, res:Response):Promise<void> =>{
    await connection("Actor")
    .delete()
    .where("id", req.query.id)

    res.status(200).send('Pessoa deletada.')
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


// ADICIONANDO.

// app.post("/filme", async(req:Request, res:Response):Promise<void>=>{
//     const {nome, salary} = req.body

//     try{

//         if(!nome){
//             const erro = new Error("O nome do produto não informando")
//         }
//          if(!salary){
//             const erro = new Error("O nome do produto não informando")
//         }

//         await connection.raw(
//             `
//              INSERT INTO Actor (nome, salary)
//              VALUES (${nome}, ${salary})
//             `
//         )

//         res.status(200).send([0])
//     }catch(error:any){
//         console.log(error.message)
//     }
// })