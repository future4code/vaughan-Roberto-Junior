```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numero = 0;
  for (const i of arrayDeNumeros){
    if (arrayDeNumeros[i] === numeroEscolhido){
        numero ++;
        console.log(numero);
   }
  }
  if (numero === 0){
    return 'Número não encontrado';
  }
  numero = numero - 1;
  return `O número ${numeroEscolhido} aparece ${numero}x`;
}

```