import { Knex } from "knex";
import { TABLE_PURCHASES } from "../database/tableNames";

export class PurchaseDB{
    constructor(private connection:Knex){
        this.connection = connection
    }

    public insertPurchase = async(newPurchase:any) =>{
      await this.connection(TABLE_PURCHASES).insert(newPurchase);
    }

    public getPrice = async(productId:any) =>{
      const result =  await this.connection(TABLE_PURCHASES)
      .select("total_price").where({product_id: productId});
      return result[0].total_price
    }

}