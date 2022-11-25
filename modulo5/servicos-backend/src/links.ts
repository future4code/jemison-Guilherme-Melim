import { app, getAllUsers } from './index';

// EXERCICIO 1
// app.get("/buscando/:type", getAllUsers)z

// EXERCICIO 2
// app.get("/buscando", getAllUsers)

// EXERCICIO 3
app.get("/pagina/:page", getAllUsers)

// EXERCICIO 4
// app.get("/buscando/:type/:page", getAllUsers)