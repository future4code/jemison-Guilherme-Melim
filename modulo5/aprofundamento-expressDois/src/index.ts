import express, {Request, Response} from "express"
import cors from 'cors'
import {afazeres} from './data'

const app = express()

app.use(express.json())

app.use(cors())

// Exercicio 1
app.get("/ping",(req:Request, res:Response) =>{
    res.send('Pong')
})

// Exercicio 2 OK

// Exercicio 3 OK

// Exercicio 4 - OK

app.get("/tarefas",(req:Request, res:Response)=>{
    const todasAsTarefas = afazeres.filter((tasks)=>{
        return tasks.completed === true
    })

    res.status(200).send(todasAsTarefas)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});