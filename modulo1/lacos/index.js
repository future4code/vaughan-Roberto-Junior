//EXERCICIO DE INTERPRETAÇÃO

/*
1
O CONSOLE DE VALOR SERÁ 10 POIS O VALOR DE I VAI SOMANDO COM O QUE 
JÁ FOI ARMAZENADO NA VARIAVEL

2A
SERÁ IMPRESSO OS NUMEROS DE 19 A 30 POIS SÃO MAIORES QUE 18

2B
console.log(lista.indexOf(numero));
DENTRO DO FOR OF

3
SERÁ IMPRESSO UMA ARVORE DE * DE 4 LINHAS

*/

//EXERCICIO DE ESCRITA

//1

let animais = parseInt(prompt("Quantos Bichos de estimação ?"));
let nomeDosPets = [];
if (animais === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else if (animais > 0) {
  for (i = 0; i < animais; i++) {
    namePets = prompt("Digite o nome deles:");
    nomeDosPets.push(namePets);
  }
  console.log(`esse é o nome dos seus Bichinhos ${nomeDosPets}`);
}

//2

let arrOriginal = [23, 55, 65, 22, 21, 22, 1, 8, 9];
//A

for (numeros of arrOriginal) {
  console.log(numeros);
}

//B

for (numeros of arrOriginal) {
  newNumber = numeros / 10;
  console.log(newNumber);
}

//C

let newArr = [];

for (num of arrOriginal) {
  if (num % 2 === 0) {
    newArr.push(num);
  }
}

console.log(newArr);

//D

arrString = [];

for (numero of arrOriginal) {
  Oindex = arrOriginal.indexOf(numero);
  frase = `O elemento do índex ${Oindex} é ${numero}`;
  arrString.push(frase);
}

console.log(arrString);

//E

let maiorNumero = 0;
let menorNumero = arrOriginal[0];

for (let numeroDoArray of arrOriginal) {
  if (maiorNumero < numeroDoArray) {
    maiorNumero = numeroDoArray;
  }
}
for (let numeroDoArray of arrOriginal) {
  if (menorNumero > numeroDoArray) {
    menorNumero = numeroDoArray;
  }
}

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);

//DESAFIOOOOOOOOOOOOOO !!!!!!!!

//1

let numeroJogador = parseInt(prompt("Digite o primeiro numero"));
console.log("Vamos Jogar !!");

let numeroChutado = parseInt(prompt("Chute o Numero !!"));

  let numeroDeTentativas = 0;
  if (numeroChutado === numeroJogador) {
    console.log("Acertouuuu !!");
    console.log(`o Numero de Tentativas foi ${numeroDeTentativas}`);
  } else if (numeroChutado > numeroJogador) {
    numeroDeTentativas += 1;
    console.log(`Errou ! o numero é Menor`);
  } else if (numeroChutado < numeroJogador) {
    numeroDeTentativas += 1;
    console.log(`Errou ! o numero é Maior`);
  }
// incompleto