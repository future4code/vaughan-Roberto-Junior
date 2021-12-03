// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
   altura = Number(prompt('qual a altura ?'));
   largura = Number(prompt('qual a largura ? '));
   console.log(altura*largura);
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('Digite o ano atual'));
  anoNascimento = Number(prompt('Digite seu ano de nascimento'));

  console.log(anoAtual-anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso/(altura*altura);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  nome = prompt('qual seu nome ?');
  idade = Number(prompt('qual sua idade ? '));
  email = prompt('qual seu email');

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let arr = [];

  primeiraCor = prompt('qual Sua primeira cor favorita');
  segundaCor = prompt('qual Sua segudna cor favorita');
  terceiraCor = prompt('qual Sua terceira cor favorita');
 
  arr.push(primeiraCor, segundaCor, terceiraCor);

  console.log(arr);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso;


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

    return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

 ultimo = array[array.length -1];
 primeiro = array[0];

 array.shift();
 array.pop();
 array.push(primeiro);
 array.unshift(ultimo);
 
 return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.toLowerCase() == string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoRG) {
  // implemente sua lógica aqui

  anoAtual = Number(prompt('qual o ano atual ?'));
  anoNascimento = Number(prompt('Qual o ano de nascimento ?'));
  anoRG = Number(prompt('ano Emissão do rg'));

  idade = anoAtual - anoNascimento;
  validade = anoAtual - anoRG;

  if((idade <= 20 && validade >= 5) || (idade > 20, idade<= 50 && validade >=10) || (idade > 50 && validade > 15)){
    console.log(true)
  }else{
    console.log(false)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  condicao1 = ano%400 === 0; //true
  condicao2 = ano%4 === 0 || ano%100 === 0 || ano%400 === 0; 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  idade = prompt('Você tem mais de 18 anos ?');
  ensino = prompt('Você possui ensino médio completo?');
  disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');
  
  result = idade == "sim" && ensino == "sim" && disponibilidade == "sim";

  console.log(result);

}