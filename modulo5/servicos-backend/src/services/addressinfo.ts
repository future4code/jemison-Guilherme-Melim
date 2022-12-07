import { connection } from "./../data/connection"
import axios from "axios";
import { Request, Response } from 'express'


// Exercicio 1 completo =======================================================================
// Exercicio 2 completo "Banco de dados criado" ===============================================

export async function newUser (req: Request, res:Response){
    const {cep, numero, complemento} = req.body

    try{

    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    console.log(data);
    if(!cep || !numero){
        res.statusCode = 422
        throw new Error("CEP e numero são obrigatórios.");
    }

    let logradouro = data.logradouro
    let bairro = data.bairro
    let cidade = data.localidade
    let estado = data.uf

    const user = {cep, numero, complemento, logradouro, bairro, cidade, estado }

    let result = await connection("Endereco").insert(user)

    res.status(200).send("Endereço adicionado com sucesso!");
}catch(error){
    res.status(400).send(error)
}
}