console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]
const juntando = [...primeiraLista, ...segundaLista]

let juntos = juntando.filter((a) => {
	return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
}, Object.create(null))

console.log(juntos)
