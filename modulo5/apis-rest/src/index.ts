import express, {Request, Response} from 'express';
import cors from 'cors';
import { users, User, UserType } from './data';

const app = express()
app.use(express.json())
app.use(cors())

let upError = 400

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

// Exercicio 3 - Busque o usuario pelo nome - OK
// A - a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Utilizei o parametro QUERY, pois era só o nome do usuario.
// B- Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
// Linha 75

app.get("/user",(req: Request, res: Response) =>{
    try{

        let userName = req.query.name as any

        if(!userName){
            upError = 422
            throw new Error("Passe o nome como parametro");
        }

        const searchName = users.find((user) =>{
            return user.name.toUpperCase() === userName.toUpperCase()
        })

        if(searchName === undefined){
            upError = 404
            throw new Error("Usuario não existente");
        }

        console.log(searchName)

        res.status(200).send(searchName)

    }catch(error:any){
        res.status(upError).send(error.message)
    }
})

// Exercicio 4 - Crando novo usuario - OK
// A - Mude o método do endpoint para `PUT`. O que mudou?
// Nada
// b - Você considera o método PUT apropriado para esta transação? Por quê?
// Por boas praticas, não. PUT ele faz grandes mudanças, POST ele cria.

app.post("/users",(req: Request, res: Response) =>{
    try{

        const {name, email, type,age} = req.body

        if(!name || !email || !type || !age){
            upError = 422
            throw new Error("Passe os parâmetros corretamente");
        }

        if(type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL"){
            upError = 401
            throw new Error("Type só é valido como ADMIN ou NORMAL");
        }

        const newUser = {
            id: Math.random(),
            name: name,
            email: email,
            type: type.toUpperCase(),
            age: age
        }

        users.push(newUser)

        res.status(200).send(users)

    }catch(error:any){
        res.status(upError).send(error.message)
    }
})

app.listen(3003,() =>{
    console.log('Server is running in http://localhost:3003')
})