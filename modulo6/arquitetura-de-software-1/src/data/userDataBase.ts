import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {

    insertUser = async (input: any) : Promise<void> =>{
        try{

            await UserDataBase.connection.insert(input).into("User_Arq")

        }catch(error:any){
            throw new Error (error)
        }
    }

    findUser = async () =>{
        try{

           const result = await UserDataBase.connection.select('*').from("User_Arq")
            return result
            
        }catch(error:any){
            throw new Error (error)
        }
    }

    deleteUser = async (id: any) =>{
        try{

            await UserDataBase.connection.delete('*').from('User_Arq').where('id', id)

        }catch(error:any){
            throw new Error (error)
        }
    }
}