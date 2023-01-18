import { UserDataBase } from './../data/userDataBase';

export class FindUserBusiness {

    findUsers = async () =>  {
        try{

            return await new UserDataBase().findUser()
            
        }catch(error:any){
            throw new Error (error)
        }
    }
}