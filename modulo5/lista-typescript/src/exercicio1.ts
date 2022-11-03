const nameUser:string = process.argv[2]
const birthday:string = process.argv[3]

const separate:string[] = birthday.split('/')

const output:string = `Olá me chamo ${nameUser}, nasci no dia ${separate[0]} do mês de ${separate[1]} do ano de ${separate[2]}`
console.log(output)