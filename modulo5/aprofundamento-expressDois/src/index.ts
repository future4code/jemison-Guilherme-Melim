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
    const todasAsTarefas = afazeres.filter((tarefa)=>{
        return tarefa.completed === true
    })

    res.status(200).send(todasAsTarefas)
})

// Exercicio 5 - OK

app.post("/tarefas/adicionando",(req:Request, res:Response)=>{
    const {userId, title, completed} = req.body

    if(!userId || !title || !completed){
        res.status(400).send('Passe os parametros certo no BODY')
    }

    if(afazeres){
        afazeres.push({
            id: Date.now(),
            userId: userId,
            title: title,
            completed: true || false
        })
    }
    res.status(200).send(afazeres)
})

// Exercicio 6 - com problemas

app.put("/alterando/:id",(req:Request, res:Response) =>{
    const idDoUsuario = Number(req.params.id)

    if(!idDoUsuario){
        res.status(400).send('Digite o ID')
    }

    const filtrando = afazeres.filter((id) =>{
        if(id.id === idDoUsuario && id.completed === true){
                return id.completed = false
            }else if(id.id === idDoUsuario && id.completed === false){
                return id.completed = true
            }
        
    })
    res.status(200).send(filtrando)
})

// Exercicio 7-

app.delete("/deletar/:id",(req:Request, res:Response) =>{
    // const idDoUsuario = Number(req.params.id)
    // if(!idDoUsuarioDelete){
    //     res.status(400).send("Colocar obrigatoriamente um id")
    // }

    // const userFiltered = afazeres.find((user)=>{
    //     return user.userId === idDoUsuarioDelete
    // })

    // if(idDoUsuarioDelete !== userFiltered?.userId){
    //     res.status(200).send("Não há uma faixa com o id informado, portanto ela não poderá ser deleta")
    // }
   
    // res.status(200).send(userFiltered)

    // if(!idDoUsuario){
    //     res.status(400).send("Colocar obrigatoriamente um id")
    // }

    //  afazeres.filter((deletando) =>{
    //     return deletando.id === idDoUsuario
    // })
    // res.status(200).send(afazeres)
})

// Exercicio 8 - 

app.get("/afazer/usuario/:id",(req:Request, res:Response) =>{
    const idDoUsuarioDelete = Number(req.params.id)

    if(!idDoUsuarioDelete){
        res.status(400).send("Colocar obrigatoriamente um id")
    }

    const novaLista = afazeres.filter((usuario) =>{
        return usuario.userId === idDoUsuarioDelete
    })


    res.status(200).send(novaLista)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});