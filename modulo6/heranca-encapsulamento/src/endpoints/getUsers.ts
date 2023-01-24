import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"


export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = new UserDatabase()
        const listUsers = await result.getAllUsers()
        
        res.status(200).send({ users: listUsers })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}