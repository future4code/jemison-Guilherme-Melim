import { UserDB } from './../class/UserDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const userDb = new UserDB(connection)
        const result = await userDb.getUsers();

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}