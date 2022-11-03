type Roupas = {
    nome: string,
    preco:number,
    classificacao:string
}

const roupasEValores: Roupas[] =[
    {nome: 'Regata', preco: 20, classificacao: 'verao'},
    {nome: 'Moletom', preco: 158, classificacao: 'inverno'},
    {nome: 'Toalha', preco: 33, classificacao: 'banho'},
    {nome: 'Meias', preco: 13, classificacao: 'intima'}
]

function filtrandoDesconto(roupasEValores:Roupas[], vestimenta:string) {
    return roupasEValores.filter(
        (item) => {
        return (item.classificacao == vestimenta)

    }).map((item):string =>{
        if(vestimenta === 'verao'){
            return (`Valor da ${vestimenta} desconto é de R$${ item.preco * 0.95}`)

       }else if(vestimenta === 'inverno'){
            return (`Valor da ${vestimenta} desconto é de R$${item.preco * 0.90}`)

       }else if(vestimenta === 'banho'){
            return (`Valor da ${vestimenta} desconto é de R$${item.preco * 0.96}`)

       }else if(vestimenta === 'intima'){
            return (`Valor da ${vestimenta} desconto é de R$${item.preco * 0.93}`)
       }       
    })
}

console.log(filtrandoDesconto(roupasEValores, process.argv[2]))
