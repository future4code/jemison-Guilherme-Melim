import { connection } from "./../data/connection"
import axios from "axios";
import { Request, Response } from 'express'


// Exercicio 1 completo =======================================================================
// Exercicio 2 completo "Banco de dados criado" ===============================================

export async function getAddressInfo(cep: string) {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    console.log(data);
    return `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf} `;
}



export async function newUser (req: Request, res:Response){
    const {CEP, numero, complemento} = req.body

    if(!CEP || !numero){
        res.statusCode = 422
        throw new Error("CEP e numero são obrigatórios.");
    }

    const address:any = await getAddressInfo(CEP);

    let result = await connection("Endereço").insert(numero, complemento, address)

    res.status(200).send(result);
}