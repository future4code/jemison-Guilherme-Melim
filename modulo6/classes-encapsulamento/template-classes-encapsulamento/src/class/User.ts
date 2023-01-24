export class User {
    constructor (private id:string, private email:string, private password: string){
        this.email = email
        this.id = id
        this.password = password
    }

    public getId():string{
        return this.id
    }
    public getEmail():string{
        return this.email
    }
    public getPassword():string{
        return this.password
    }
    public setEmail(newEmail:string):void{
        this.email = newEmail
    }
    public setPassaword(newPassaword:string):void{
        this.password = newPassaword
    }
}