export class Product {
    private id:string
    private name:string
    private price:number

    constructor (id:string, name:string, price:number){
        this.id = id
        this.name = name
        this.price = price
    }

    public getId():string{
        return this.id
    }
    public getName():string{
        return this.name
    }
    public getPrice():number{
        return this.price
    }
    public setName(newName:string):void{
        this.name = newName
    }
    public setPrice(newPrice:string):void{
        this.price = this.price
    }
}