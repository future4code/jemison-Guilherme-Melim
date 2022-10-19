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
        return item.classificacao == vestimenta    
    })
}

console.log(filtrandoDesconto(roupasEValores, process.argv[2]))

const filtrando = roupasEValores.map((item)=>{
    if(item.classificacao === 'verao' && process.argv[2]){
         (`Valor com desconto R$${ item.preco * 0.95}`)
    }else if
        (item.classificacao === 'inverno' && process.argv[2]){
         (`Valor com desconto R$${item.preco * 0.90}`)
    }else if
        (item.classificacao === 'banho' && process.argv[2]){
         (`Valor com desconto R$${item.preco * 0.96}`)
    }else if
        (item.classificacao === 'intima' && process.argv[2]){
         (`Valor com desconto R$${item.preco * 0.93}`)
    }
    return 
}
)

console.log(filtrando)

// Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas). 

// a) Escreva uma função que receba um array de produtos com nome, preço e classificação;
//  e retorne um array com essas informações e um campo mais: "preço com desconto"