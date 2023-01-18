import { FindUserController } from './controller/findUserControlle';
import { UserController } from './controller/userController';
import {app} from "./app"

const userController = new UserController()

app.post("/creatUser", userController.insertUser)

const userFindController = new FindUserController()

app.get("/all", userFindController.findUser)


