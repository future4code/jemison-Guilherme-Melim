import { CustomError } from "./CustomError";

export class InvalidDataMovie extends CustomError{
    constructor(){
        super(400, "Dados invalido!")
    }
}