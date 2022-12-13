import { TABLE_USERS } from './../database/tableNames';
import { Knex } from "knex";
import { User } from "./User";

export class UserDB {
    constructor(private connection:Knex){
        this.connection = connection
    }

    public insertUser = async(newUser : User) =>{
        await this.connection(TABLE_USERS).insert(newUser);
    }

    public getUsers = async() =>{
        const result = await this.connection(TABLE_USERS).select();
        return result
    }
}