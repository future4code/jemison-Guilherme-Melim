```javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidadeDeX = arrayDeNumeros.reduce(
    (acc, item)=> numeroEscolhido === item ? acc + 1 : acc, 0)

   if (quantidadeDeX >= 1){
     let frase = (`O número ${numeroEscolhido} aparece ${quantidadeDeX}x`)
     return frase
    }else if(quantidadeDeX === 0) {
      let naoTem = ("Número não encontrado")
      return naoTem
    }
}

```