import {Request, Response} from 'express'
import { FindUserBusiness } from '../business/FindUserBusiness';

export class FindUserController {
    findUser = async (req: Request, res:Response) : Promise<void>=>{
        try{

            const users = await new FindUserBusiness().findUsers()

            res.status(200).send(users);
            
        }catch(error:any){
            throw new Error (error)
        }
    }
}