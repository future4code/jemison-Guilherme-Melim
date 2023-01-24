import {Request, Response} from 'express'
import { DeleteBusiness } from '../business/DeleteBusiness'

export class DeleteController {

    deleteController = async (req: Request, res: Response) : Promise<void> =>{
        try{

            const id = {
                id: req.params.id
            }
            
            const deleteBusiness = new DeleteBusiness()
            
            deleteBusiness.deleteBusiness(id)
            
            res.status(200).send({message: "Usuário Deletado!"})
            
        }catch(error:any){
            throw new Error (error)
        }
    }
}