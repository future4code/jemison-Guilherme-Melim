import { connection } from './connection';
import express, {Request, Response} from "express"
import cors from 'cors'

export const app = express()
app.use(express.json())
app.use(cors())


app.get("/buscando/:type/:page", async(req: Request,res: Response): Promise<void> =>{

    try {
 
       let sort = req.query.sort
       let order = req.query.order
       let name = req.query.name 
       let type = req.params.type
       let page = Number(req.params.page)

       let offSet = 5 * (page - 1)
       
      const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio WHERE
         name = "${name}" AND type = "${type}"
         ORDER BY ${sort} ${order}
         LIMIT 5 OFFSET ${offSet};
      `)
       
      //  if(!page){
      //     page = 1
      //    }


      //  console.log(offSet)
      //  if(!name && !type){
      //    name = ""
      //  }
 
      //  if(!sort){
      //     sort = "name"
      //  }
 
      //  if(!order){
      //     order = "DESC"
      //  }
        
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 })
 
 app.listen(3003, () => {
     console.log("Server is running in http://localhost:3003");
 });