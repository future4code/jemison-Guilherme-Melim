import  express, {Request, Response}  from "express"
import cors from 'cors'

const app = express()
app.use(express.json)
app.use(cors())

app.get("/ping", (res:Response, req:Request) =>{
    
    res.send("pong")
})

app.listen(3003, () =>{
    console.log('server is running in http://localhost:3003')
})
