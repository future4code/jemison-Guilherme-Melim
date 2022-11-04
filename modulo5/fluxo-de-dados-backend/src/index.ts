import express, {Response, Request} from "express"
import cors from 'cors'
import { varejo } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1 - ok "Testando"
app.get("/test",(req:Request, res:Response) =>{
 res.status(200).send("Servidor rodando na porta 3003")
})

// Exercicio 2 - ok
// Exercicio 3 - ok

// Exercicio 4 - ok "Criando produto"

app.post("/adicionando",(req:Request, res:Response) =>{
 
    const {name, price} = req.body

    if(!name || !price){
        res.status(400).send("filtrando errado")
    }

    const filtrando = varejo.push(
        {
        id: Date.now().toString(),
        name: name,
        price: price
        }
    )
   
    res.status(200).send(filtrando)


})

// Exercicio 5 - ok "Retornando lista"

app.get("/produtos",(req:Request, res:Response) =>{
    res.status(200).send(varejo)
})

// Exercicio 6 - ok "Modificando preço"

app.patch("/alterando/:id",(req:Request, res:Response) =>{
    
    let erro = 400

    try{

        let idProduto = req.params.id
        let novoPreco: number = req.body

        if(!idProduto){
            erro = 422
            throw new Error('Digite o id do produto')
        }

        const produtoExiste = varejo.find((item) =>{
            return item.id === idProduto
        })

        if(!produtoExiste){
            erro = 404
            throw new Error("Produdo não existe");
        }

        for(let produto of varejo){
            if(idProduto === produto.id){
                produto.price = novoPreco
            }    
        }
        res.status(200).send(varejo)

    }catch (error: any){
        res.status(erro).send(error.message) 
    }
})

// Exercicio 7 e 10 - ok "Deletando produto"

app.delete("/deletar",(req:Request, res:Response) =>{
    
    let erro = 400

    try{
        const idProduto = req.query.id

        if(!idProduto){
            erro = 402
            throw new Error('Digite um id')
        }
        
        const filtro = varejo.filter((item) =>{
            return item.id !== idProduto
        })
        
        res.status(200).send(filtro)
        
    }catch(error:any){
        res.status(erro).send(error.message) 
    }

    // TENTEI USAR ESSA LOGICA DE BAIXO, MAS NÃO ENTENDI PQ SÓ RETORNAVA O "1", DEIXEI AI PRA DESCOBRIR DEPOIS...

    // const filtro = varejo.filter((item) =>{
    //     return item.id !== idProduto
    // })
    
    // for(let produto of varejo){
    //     if(produto.id === idProduto){
    //         res.status(200).send(filtro)
    //     }else{
    //         erro = 402
    //         throw new Error('Digite um id valido')
    //     }  
    // }
})


app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})