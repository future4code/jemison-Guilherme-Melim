import { ProductDB } from './../class/ProductDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        
        const productsDb = new ProductDB(connection)
        const result = await productsDb.getProducts();

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}