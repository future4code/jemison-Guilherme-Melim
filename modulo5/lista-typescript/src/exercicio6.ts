type Persona2 = {
    cliente : string,
    saldoTotal : number,
    debitos : number[]
}

const clientes: Persona2[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const saldoDevedores = (lista:Persona2[]):any =>{

    const Inadiplentes = lista.map((item:Persona2)=>{
        const devedor =item.debitos.reduce((a,b)=> a + b , 0)
        return {cliente:item.cliente, saldoTotal:(item.saldoTotal - devedor), debitos: []}

    }).filter((devedores)=>{
        return devedores.saldoTotal < 0
    })

    return Inadiplentes
}

console.table(saldoDevedores(clientes))
