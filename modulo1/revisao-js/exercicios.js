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
  newArr = arr.filter((a) => {
    return a % 2 === 0;
  });

  for (i = 0; i < n; i++) {
    arrFinal.push(newArr[i]);
  }

  return arrFinal;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoC == ladoA && ladoC == ladoB) {
    return "Equilátero";
  } else if (ladoA == ladoB || ladoC == ladoA || ladoC == ladoB) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  newArr = array;
  arrFinal = [];

  if (array[2] == undefined) {
    arrFinal = array;
  } else {
    let maiorNumero = Math.max.apply(Math, newArr);
    let menorNumero = Math.min.apply(Math, newArr);

    index1 = newArr.indexOf(maiorNumero);
    index2 = newArr.indexOf(menorNumero);

    newArr.splice(index1, 1);
    newArr.splice(index2, 1);

    numeroMaior = Math.max.apply(Math, newArr);
    numeroMenor = Math.min.apply(Math, newArr);

    arrFinal.push(numeroMaior);
    arrFinal.push(numeroMenor);
  }

  return arrFinal;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    novo = filme.atores.join(', ');
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${novo}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    newObj = {...pessoa};
    newObj.nome = "ANÔNIMO";

    return newObj;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    pessoasAutorizadas = pessoas.filter((i)=>{
        return i.idade < 60 && i.altura >= 1.5 && i.idade > 14;
    });

    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    pessoasNaoAutorizadas = pessoas.filter((i)=>{
        return !(i.idade < 60 && i.altura >= 1.5 && i.idade > 14);
    });

    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  total = contas[0].compras;
  arr = [...total];

  var soma = arr.reduce(function(soma, i) {
    return soma + i;
});

contas[0].saldoTotal = (contas[0].saldoTotal)-(soma);
contas[0].compras = [];

  return contas;
}
 
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
      
     return consultas.sort((a,b)=>{

     if (a.nome < b.nome){
        return -1;
     }
     if (a.nome > b.nome){
       return 1;
   }
     });

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    consultas.sort(function(a,b) { 
        return new Date(a.dataDaConsulta).getTime() - new Date(b.dataDaConsulta).getTime() 
    });

    return consultas;
}
