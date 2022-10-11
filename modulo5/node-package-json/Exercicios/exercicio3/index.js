// ============================================================================== Exercicio 3
// Para rodar a aplicação digite: npm run adicionar "O que deseja adicionar"

const adicional = process.argv[2]
const tarefas= [
    'Lavar a louça',
    'Varrer a casa',
    'Passar pano'
]

 tarefas.push(adicional)

console.table(tarefas)
