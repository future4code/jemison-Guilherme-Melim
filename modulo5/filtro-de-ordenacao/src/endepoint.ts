import { connection } from "./connection"

export default async function selectAllUsers(name:any, type:any):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name = "${name}" AND type = "${type}";
    `)
 
    return result[0]
 }