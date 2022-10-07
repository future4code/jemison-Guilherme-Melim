console.log("exercício 2");

const pessoas = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

const novaPessoa = {id: 4, nome: 'Guilherme'}
pessoas.push(novaPessoa)
// console.log(pessoas)

const validando = () =>{

		if(pessoas.id === novaPessoa.id || pessoas.nome === novaPessoa.nome){
			return "Já existente!"
		}else{
			const adicionado = pessoas.push(novaPessoa)
			return adicionado
			 
		}
	}

// console.log(validando())

// ---------------------------------------- Taboada

let num = 5

const multiplicando = () =>{
for(let i; i<=10 ; i++){
	`${num} x ${i} = ${num * i}`
}
return
}
console.log(multiplicando)