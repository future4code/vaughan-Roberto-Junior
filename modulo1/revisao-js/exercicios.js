// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  newArr = array.filter((num) => {
    return num % 2 === 0;
  });
  return newArr;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  newArr = array
    .filter((num) => {
      return num % 2 === 0;
    })
    .map((num) => {
      return num * num;
    });
  return newArr;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  newArr = Math.max.apply(Math, array);
  return newArr;
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let array = [num1, num2];

  let maiorNumero = Math.max.apply(Math, array);
  let menorNumero = Math.min.apply(Math, array);

  let maiorDivisivelPorMenor;

  if (maiorNumero % menorNumero === 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }

  let diferenca = maiorNumero - menorNumero;

  obj = {};

  obj.maiorNumero = maiorNumero;
  obj.maiorDivisivelPorMenor = maiorDivisivelPorMenor;
  obj.diferenca = diferenca;

  return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  arr = [];
  arrFinal = [];
  
  for (i = 0; i < 100; i++) {
    arr.push(i);
  }
  newArr = arr.filter((a)=>{
      return a%2 === 0;
  });

  for(i=0; i<n;i++){
    arrFinal.push(newArr[i]);
  }
  
  return arrFinal;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
