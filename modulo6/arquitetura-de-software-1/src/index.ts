import { FindUserController } from './controller/FindUserController';
import { UserController } from './controller/UserController';
import {app} from "./app"
import { DeleteController } from './controller/DeleteController';

const userController = new UserController()

app.post("/creatUser", userController.insertUser)

const userFindController = new FindUserController()

app.get("/all", userFindController.findUser)

const userDeleteController = new DeleteController()

app.delete("/:id", userDeleteController.deleteController)
