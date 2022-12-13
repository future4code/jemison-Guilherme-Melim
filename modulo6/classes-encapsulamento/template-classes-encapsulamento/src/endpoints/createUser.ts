import { Request, Response } from "express"
import { User } from "../class/User"
import { UserDB } from "../class/UserDataBase"
import connection from "../database/connection"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const id = Math.random().toString()
        const newUser = new User(id, email, password)
        const userDb = new UserDB(connection)
        userDb.insertUser(newUser)
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}