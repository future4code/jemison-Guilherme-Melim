import { UserDB } from './../class/UserDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"
import { Purchase } from "../class/Purchase"
import { PurchaseDB } from "../class/PurchaseDataBase"
import { ProductDB } from '../class/ProductDataBase';

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userDb = new UserDB(connection)
        const findUser = await userDb.getUsersId(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productDb = new ProductDB(connection)
        const findProduct = await productDb.getProductId(productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        const priceDB = new PurchaseDB(connection)
        const price:any = await priceDB.getPrice(productId)
        const totalPrice:any = price * quantity

        const id = Math.random().toString()
        const newPurchase =new Purchase (id, userId, productId, quantity, totalPrice)
        const purchaseDb = new PurchaseDB(connection)
        purchaseDb.insertPurchase(newPurchase)

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}