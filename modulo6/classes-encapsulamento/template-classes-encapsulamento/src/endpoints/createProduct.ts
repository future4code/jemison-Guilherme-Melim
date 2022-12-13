import { ProductDB } from './../class/ProductDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"
import { Product } from "../class/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const {name, price} = req.body

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const id = Math.random().toString()
        const newProduct = new Product(id, name, price)
        const productDb = new ProductDB(connection)
        productDb.insertProduct(newProduct)
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}