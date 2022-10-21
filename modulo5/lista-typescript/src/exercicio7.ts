type Produtos = {
    nome: string
    quantidade: number,
    valorUnitario: number
}
type ProdutosSaida = {
    nome: string
    quantidade: number,
    valorUnitario: string

}

let produtos: Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const ordenando = ((item1:Produtos, item2:Produtos) =>{
    if(item1.quantidade < item2.quantidade){
        return -1
    }else if(item1.quantidade > item2.quantidade){
        return 1
    }
})

const organizando = (([]) =>{
    produtos.sort(ordenando)
    const novaLista:ProdutosSaida[] = produtos.map((item) =>{
        return {nome: item.nome, quantidade: item.quantidade, valorUnitario: (ajustaPreco(item.valorUnitario)) }
    })
    return novaLista
})

console.table(organizando(produtos))