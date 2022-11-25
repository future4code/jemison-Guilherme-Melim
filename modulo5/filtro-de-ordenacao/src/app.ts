import { selectAllUsers } from '.';
import express, {Request, Response} from "express"
import cors from 'cors'

export const app = express()
app.use(express.json())
app.use(cors())

// EXERCICIO 1 COMPLETO =====================================================================

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       let users = await selectAllUsers(req.query.name, req.params.type)

      
//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No user found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

// app.listen(3003, () => {
//     console.log("Server is running in http://localhost:3003");
// });

// EXERCICIO 2 COMPLETO =====================================================================

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
 
//        let sort = req.query.sort
//        let order = req.query.order
 
//        if(!sort){
//           sort = "email"
//        }
 
//        if(!order){
//           order = "ASC"
//        }
 
//        let users = await selectAllUsers(sort, order)
 
       
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No user found")
//        }
 
//        console.log(sort)
 
//        res.status(200).send(users)
       
//     } catch (error:any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }
 
//  app.listen(3003, () => {
//      console.log("Server is running in http://localhost:3003");
//  });

// EXERCICIO 3 COMPLETO =====================================================================

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {

//       let page = Number(req.params.page)

//       let offSet = 5 * (page - 1)

//       let users = await selectAllUsers(offSet)

      
//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No user found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

// app.listen(3003, () => {
//     console.log("Server is running in http://localhost:3003");
// });

// EXERCICIO 4 COMPLETO =====================================================================

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
 
//        let sort = req.query.sort
//        let order = req.query.order
//        let name = req.query.name 
//        let type = req.query.type
//        let page = Number(req.params.page)

//        if(!page){
//          page = 1
//        }

//        let offSet = 5 * (page - 1)

//        if(!name && !type){
//          name = ""
//        }
 
//        if(!sort){
//           sort = "name"
//        }
 
//        if(!order){
//           order = "DESC"
//        }
 
//        let users = await selectAllUsers(name, type, sort, order, offSet)
 
       
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No user found")
//        }
 
//        console.log(sort)
 
//        res.status(200).send(users)
       
//     } catch (error:any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }
 
 app.listen(3003, () => {
     console.log("Server is running in http://localhost:3003");
 });