import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


app.get("/criando",(req:Request, res:Response)=>{
    
 res.status(200).send('deu bom na liga')
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});