import { connection } from "./Data/connection"


// EXERCICIO 1 COMPLETO ============================================================================

// export async function selectAllUsers(name:any, type:any):Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula48_exercicio WHERE name = "${name}" AND type = "${type}";
//     `)
 
//     return result[0]
//  }

// EXERCICIO 2 COMPLETO ============================================================================

//  export async function selectAllUsers(sort:any, order:any):Promise<any> {
//    const result = await connection.raw(`
//       SELECT id, name, email, type
//       FROM aula48_exercicio ORDER BY ${sort} ${order};
//    `)

//    return result[0]
// }

// EXERCICIO 3 COMPLETO ============================================================================

// export async function selectAllUsers(offSet:any):Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula48_exercicio LIMIT 5 OFFSET ${offSet};
//     `)
 
//     return result[0]
//  }

// EXERCICIO 4 COMPLETO ============================================================================

//  export async function selectAllUsers(name:any, type:any, sort:any, order:any, offSet:any):Promise<any> {
//    const result = await connection.raw(`
//       SELECT id, name, email, type
//       FROM aula48_exercicio WHERE
//       name = "${name}" AND type = "${type}"
//       ORDER BY ${sort} ${order}
//       LIMIT 5 OFFSET ${offSet};
//    `)

//    return result[0]
// }