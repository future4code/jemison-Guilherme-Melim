import { UserDataBase } from './../data/UserDataBase';


export class DeleteBusiness {

    public deleteBusiness = async (idInput: any) :Promise<void> =>{

        try{

            const {id} = idInput

            if(!id){
                throw new Error("Digite um id valido!");
            }

            const userDataBase = new UserDataBase

            userDataBase.deleteUser(id)

        }catch(error:any){
            throw new Error (error)
        }
    }
}