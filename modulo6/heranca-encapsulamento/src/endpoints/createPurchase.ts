import { UserDatabase } from './../database/UserDatabase';
import { PurchaseDataBase } from './../database/PurchaseDateBase';
import { ProductDataBase } from '../database/ProductDataBase';
import { Request, Response } from "express"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userFind = new UserDatabase()
        const findUser = await userFind.idUser(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productFind = new ProductDataBase()
        const findProduct = await productFind.idUser(productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        const result = new PurchaseDataBase()
        result.purchaseCreate(purchase)

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}