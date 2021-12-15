```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco;
  
  if (quantidade < 12){
    preco = 1.30;
  }else{
    preco = 1;
  }
  return quantidade*preco;
}
```