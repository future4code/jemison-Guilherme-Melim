console.log("exercício 2");

const pessoas = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

const novaPessoa = {id: 5, nome: 'Guilherme'}
pessoas.push(novaPessoa)
// console.log(pessoas)

// const validando = () =>{

// 		if(pessoas.id === novaPessoa.id || pessoas.nome === novaPessoa.nome){
// 			return "Já existente!"
// 		}else{
// 			const adicionado = pessoas.push(novaPessoa)
// 			return adicionado
			 
// 		}
// 	}

// console.log(validando())

// ---------------------------------------- Taboada

const numero = 4 //Digite qualquer numero

const multiplicando = () =>{
	for(let i; i<= 10 ; i++){

		document.write(numero)
	}
}

console.log(multiplicando())