import express, {Request, Response} from "express"
import cors from 'cors'
import { user, postDosUsuarios } from "./data"


const app = express()

app.use(express.json())

app.use(cors())


app.get("/todos",(req:Request, res:Response)=>{
    
   const todos = user.filter((item) =>{
       return item.id
    })

 res.status(200).send(todos)
})

app.get( '/todosPost',(req:Request, res:Response)=>{
    
    const posts = postDosUsuarios.filter((item)=>{
      return  item.title
    })

 res.status(200).send(posts)
})


app.get('/post/:userId', (req:Request, res:Response) =>{

       const idPostagens = req.params.userId 

        const postFiltrado = postDosUsuarios.filter((post)=>{
           return Number(idPostagens) === post.userId
        })
        
 res.status(200).send(postFiltrado)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});