```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12){
    let menos = quantidade * 1.30
    return menos
  }else if (quantidade >= 12){
    let mais = quantidade * 1
    return mais
  }
}
```