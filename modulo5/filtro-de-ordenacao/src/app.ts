import express, {Request, Response} from "express"
import cors from 'cors'
import selectAllUsers from "./endepoint"

export const app = express()
app.use(express.json())
app.use(cors())

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let users = await selectAllUsers(req.query.name, req.params.type)

      
      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});