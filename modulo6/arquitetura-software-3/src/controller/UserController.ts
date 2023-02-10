import { CreateUserDTO } from './../model/createUserDTO';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from '../error/CustomError';

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password }: CreateUserDTO = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }

  async allUsers (req: Request, res: Response) :Promise<void> {

    const userBusiness = new UserBusiness();
    const users = await userBusiness.allUsers()
    
    res.status(200).send(users)

  }
}
