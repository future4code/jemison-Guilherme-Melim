import { app } from "./app"
import { newUser } from './services/addressinfo'

app.post("/teste", newUser )