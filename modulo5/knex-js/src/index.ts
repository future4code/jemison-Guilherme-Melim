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

// Criando ator
app.post('/criando', async(req:Request, res:Response):Promise<void> =>{

     await connection
    .insert({
      id: req.body.id,
      nome: req.body.nome,
      salary: req.body.salary,
      birth_date: req.body.birth_date,
      gender: req.body.gender,
    })
    .into("Actor");

    res.status(200).send(`Ator criado com sucesso!`)
})

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

// c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

app.get('/salario', async(req:Request, res:Response):Promise<void> =>{
   let resultado = 
    await connection("Actor")
    .avg("salary")
    .where("gender", req.query.gender)
    res.status(200).send(resultado[0])
})

// Exercicio 3 =======================================================

//a) Bscando pelo ID
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const actor = await connection("Actor")
        .select('*')
        .where("id", id)
      res.status(200).send(actor[0])

    } catch (e:any){
        console.log(e.message)
      res.status(400).send({
        message: e.message,
      })
    }
  })

//b) Crie um endpoint agora com as seguintes especificações:
// - Deve ser um GET (`/actor`)
// - Receber o gênero como um *query param* (`/actor?gender=`)
// - Devolver a quantidade de atores/atrizes desse gênero

app.get("/quantidade", async (req: Request, res: Response) => {
    try{
        let quantidade =
        await connection("Actor")
        .count("gender")
        .where("gender", req.query.gender)
        res.status(200).send(quantidade[0])

    }catch (e:any){
        console.log(e.message)
      res.status(400).send({
        message: e.message,
      })
    }
})

// Exercicio 4 =======================================================

// - a) Endpoint para atualizar salário com id
//     - Deve ser um PUT (`/actor`)
//     - Receber o salário e o id pelo body
//     - Simplesmente atualizar o salário do ator com id em questão

app.put("/quantidade", async (req: Request, res: Response) =>{
    try{
        await connection("Actor")
        .update("salary", req.body.salary)
        .where("id", req.body.id)
        res.status(200).send("Salario atualizado com sucesso!")

    }catch(e:any){
        console.log(e.message)
      res.status(400).send({
        message: e.message,
      })
    }
})

// - b) Endpoint para deletar ator da tabela
//     - Deve ser um DELETE (`/actor/:id`)
//     - Receber id do ator como *path param*
//     - Simplesmente deletar o ator da tabela

app.delete('/deletar/:id', async(req:Request, res:Response):Promise<void> =>{
    try{
        await connection("Actor")
        .delete()
        .where("id", `"${req.params.id}"`)
        res.status(200).send("Ator deletado com sucesso!")

    }catch(e:any){
        console.log(e.message)
      res.status(400).send({
        message: e.message,
      })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});