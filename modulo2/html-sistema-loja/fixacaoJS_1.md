```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let procentagemDasVendas = valorTotalVendas * 0.05
let extraPorCadaCarroVendido = 100 * qtdeCarrosVendidos
let salarioDoMes = procentagemDasVendas + extraPorCadaCarroVendido + 2000
return salarioDoMes
}
```