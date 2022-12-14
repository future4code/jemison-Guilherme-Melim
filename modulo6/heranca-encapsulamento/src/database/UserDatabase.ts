import { TABLE_USERS } from './tableNames';
import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
    public static table = TABLE_USERS

    public async getAllUsers(){
        const result = await BaseDataBase.connection(UserDatabase.table).select()
        return result
    }

    public async creatUser(user:any){
        await BaseDataBase.connection(UserDatabase.table).insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword()
    })
}
}