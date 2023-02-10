import { CreateUserDTO } from './../model/createUserDTO';
import { InsertCreateUserDTO } from "../model/createUserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: InsertCreateUserDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async allUsers () :Promise<CreateUserDTO> {

    return await UserDatabase.connection.select().from(UserDatabase.TABLE_NAME)

  }
}
