const palavra = 'Labenu'
const num = Number(palavra.length) 
let fatorial= 1
let explicaFator = ''

for(let i= 1; i<=num; i++){

    fatorial=fatorial*i
    if(explicaFator != ''){
      explicaFator += 'x ';
    }
    explicaFator += i;
    
}
console.log(`${num}! = ${explicaFator} = ${fatorial}`);
