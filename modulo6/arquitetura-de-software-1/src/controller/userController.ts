import { UserBusiness } from './../business/UserBusiness';
import {Request, Response} from 'express'


export class UserController {

    insertUser = async (req:Request, res:Response) : Promise<void> =>{
        try{

            const input = {
                name: req.body.name ,
                email: req.body.email,
                password: req.body.password
            }

            res.status(201).send({ message: "Usuário criado!" });

            const userBusiness = new UserBusiness()

            userBusiness.cratUser(input)


        }catch(error:any){
            throw new Error (error)
        }
    }


    deleteUser = () =>{}
}