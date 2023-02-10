import { InvalidEmailUser, InvalidPassawordUser, InvalidDataUser } from './../error/UserErrors';
import { generateID } from './../services/idGenerate';
import { CreateUserDTO, InsertCreateUserDTO } from './../model/createUserDTO';
import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {
  async create({ email, name, password }: CreateUserDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new InvalidDataUser()
    }

    if(!email.includes("@")){
      throw new InvalidEmailUser()
    }

    if(password.length < 5){
      throw new InvalidPassawordUser()
    }

    const id = generateID()
    const user: InsertCreateUserDTO ={
      id,
      name,
      email,
      password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(user)
  }

  async allUsers () :Promise<CreateUserDTO> {
    
    const userDataBase = new UserDatabase()
    return userDataBase.allUsers()
    
  }

}
