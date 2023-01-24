export class Purchase {
   private id: string
   private userId: string
   private productId: string
   private quantity: number
   private totalPrice: number

    constructor (id:string, userId:string, productId:string, quantity:number, totalPrice:number){
        this.id = id
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
        this.userId = userId
    }

    public getId():string{
        return this.id
    }
    public getProductId():string{
        return this.productId
    }
    public getQuantity():number{
        return this.quantity
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public getUserId():string{
        return this.userId
    }
    public setQuantity():void{
        this.quantity
    }


}