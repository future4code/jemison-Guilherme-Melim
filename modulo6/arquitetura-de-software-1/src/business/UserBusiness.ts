import { UserDataBase } from "../data/userDataBase";

export class UserBusiness {

    public cratUser = async (input: any) : Promise<void> =>{

        try{
            const {name, email, password} = input


            if(!name || !email || !password){
                throw new Error("Preencha todos os campos!");
            }

            const userDataBase = new UserDataBase

            const id = Date.now().toString()

            userDataBase.insertUser({
                id,
                name,
                email,
                password
            })

        }catch(error:any){
            throw new Error (error);
        }
    }


}