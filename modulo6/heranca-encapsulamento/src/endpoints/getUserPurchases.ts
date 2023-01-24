import { PurchaseDataBase } from './../database/PurchaseDateBase';
import { Request, Response } from "express"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const result = new PurchaseDataBase()
        const listPurchase = await result.getAllPurchase(id, TABLE_PRODUCTS, TABLE_USERS, TABLE_PURCHASES)
        console.log(listPurchase)

        res.status(200).send({ purchases: listPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}