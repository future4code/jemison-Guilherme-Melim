import { getAllUsers } from "./app";
import { app } from "./app";


app.get("/buscando/:type", getAllUsers)