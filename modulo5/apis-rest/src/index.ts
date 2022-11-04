import express, {Request, Response} from 'express';
import cors from 'cors';
import { users } from './data';

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1- Buscando lista de usuarios - OK
// A- Utilizei o metodo GET.
// B- A enidade é USERS, pois é uma lista de usuarios
app.get("/users",(req: Request, res: Response) =>{
    res.status(200).send(users)
})

// Exercicio 2- Buscando usuarios de um type especifico - ok
// A - Como você passou os parâmetros de type para a requisição? Por quê?
// Passei como PARAMS, apenas por conta da validação, quando se usa o QUERY não da
// para se usar o .toUpperCase(), pois da que não se tem um objeto. Já no PARAMS sempre se 
// tem um nome, pois ele já é passado na entidade como ":type".

// B - Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// Sim, fazendo o UNUM e utilizando a logica da linha 35.

let upError = 400

app.get("/user/:type",(req: Request, res: Response) =>{
    
    try{
        const userType = req.params.type
        
        if(userType === ':type'){
            upError = 422
            throw new Error("Passe o TYPE do usuario");

        }else if(userType.toUpperCase() !== 'ADMIN' && userType.toUpperCase() !== 'NORMAL'){
            upError = 404
            throw new Error("Apenas é valido os TYPE 'ADMIN' e 'NORMAL' ");
        }

        const userFilter = users.filter((type) =>{
            return type.type === userType.toUpperCase()
        })

        res.status(200).send(userFilter)

    }catch(error:any){
        res.status(upError).send(error.message)
    }
})

// Exercicio 3 -

app.listen(3003,() =>{
    console.log('Server is running in http://localhost:3003')
})