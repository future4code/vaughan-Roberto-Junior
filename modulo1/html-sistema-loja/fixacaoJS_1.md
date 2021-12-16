```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva let eu código aqui
     let carrosVendidos = parseInt(qtdeCarrosVendidos);
     let valorVendas = parseInt(valorTotalVendas);
     
     let comissao = carrosVendidos*100;
     let porcentagem = valorVendas*0,05;
     
     return 2000+comissao+porcentagem;
}
```