import { TABLE_PURCHASES } from "./tableNames";
import { BaseDataBase } from "./BaseDatabase";

export class PurchaseDataBase extends BaseDataBase{
    public static table = TABLE_PURCHASES

    public async getAllPurchase(id:any, TABLE_PRODUCTS:any, TABLE_USERS:any, TABLE_PURCHASES:any){
        const [result] = await BaseDataBase.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)
        return result[0]
    }

    public async purchaseCreate(purchase: any){
        await BaseDataBase.connection(PurchaseDataBase.table).insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        })
    }
}