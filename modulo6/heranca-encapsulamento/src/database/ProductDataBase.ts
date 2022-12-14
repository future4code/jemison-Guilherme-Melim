import { TABLE_PRODUCTS } from "./tableNames";
import { BaseDataBase } from "./BaseDatabase";

export class ProductDataBase extends BaseDataBase{
    public static table = TABLE_PRODUCTS

    public async getAllProduct(){
        const result = await BaseDataBase.connection(ProductDataBase.table).select()
        return result
    }

    public async productCreate(product:any){
        await BaseDataBase.connection(ProductDataBase.table).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }
}