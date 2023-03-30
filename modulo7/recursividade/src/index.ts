// Exercício 1
// const printNumber = (n:number) =>{
//     if(n >= 0){
//         printNumber(n-1)
//         console.log(n)
//     }
// }

// const numberPrint = (n:number) =>{
//     if(n >= 0){
//         console.log(n)
//         numberPrint(n-1)
//     }
// }

// Exercício 2
// const printAdd = (n:number, result:number = 0): any =>{
//     if(n === 0){
//         return result
//     }
//     return printAdd(n-1, result + n)
// }

// Exercício 3
// const numberPrintLop = (n:number) =>{
//     let result = []
//     for (let i = 0 ; i <= n ; i++){
//         result.push(i)
//     }
//     return result.reverse()
// }

// Exercício 4
const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i])
    }
}
  
const array = [1, 2, 3, 4]

// console.log(printNumber(5))
// console.log(numberPrint(5))
// console.log(printAdd(10))
// console.log(numberPrintLop(5))
console.log(printArray(array))