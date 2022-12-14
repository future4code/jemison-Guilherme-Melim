import { ProductDataBase } from './../database/ProductDataBase';
import { Request, Response } from "express"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = new ProductDataBase()
        const listProducts = await  result.getAllProduct()
        res.status(200).send({ products: listProducts })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}