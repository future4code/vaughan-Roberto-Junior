//EXERCICIO DE INTERPRETAÇÃO

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
***(O RESULTADO SERÁ FALSE POIS EXISTE 1 FALSE)***

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
***(O RESULTADO SERÁ FALSE POIS EXISTE 1 FALSE)***
                                 
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
***(O RESULTADO SERÁ TRUE POIS AMBAS SÃO TRUE)***

console.log("d. ", typeof resultado)
***(O RESULTADO SERÁ BOOLEAN POIS É O TIPO DA VARIAVEL)***

__________________________________________________________

2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
console.log(soma)

***(SERÁ IMPRESSO A CONCATENAÇÃO DAS STRINGS POIS O PROMPT RETORNA UMA STRING,
     SERÁ NECESSARIO CONVERTER PARA INTEIRO PARA REALIZAR A SOMA)***

________________________________________________________

3.

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;
console.log(soma);

*/

//EXERCICIO 1

const idade = Number(prompt('Qual Sua Idade ?'));
const idadeMelhorAmigo = Number(prompt('Qual a idade Do melhor Amigo(a)?'));
let resposta = idade > idadeMelhorAmigo
let diferenca = idade - idadeMelhorAmigo

console.log('Sua idade é maior do que do seu amigo ? : ' +resposta);
console.log('a Diferença de idade é : ' +diferenca);

//EXERCICIO 2

const numero = Number(prompt('insira um Número PAR: '));

console.log('o Resto da divisão por 2 é : ' +numero%2);

//TODOS OS RESULTADOS SÃO 0 POIS OS NUMEROS SÃO PARES
//AO INSERIR UM IMPAR O RESTO SERÁ SEMPRE 1

//EXERCICIO 3

const idadeEmAnos = Number(prompt('Qual Sua idade?'));
let idadeEmMeses = idadeEmAnos*12;
let idadeEmDias = idadeEmAnos*365;
let idadeEmHoras = idadeEmDias*24;

//FOI CONSIDERADO ANO COM 365

console.log('Sua idade em meses é : ' +idadeEmMeses);
console.log('Sua idade em Dias é : ' +idadeEmDias);
console.log('Sua idade em Horas é : ' +idadeEmHoras);

//EXERCICIO 4

const n1 = Number(prompt('insira o primeiro Numero : '));
const n2 = Number(prompt('insira o segundo Numero : '));
let maiorMenor = n1 > n2;
let igual = n1 === n2;
let divisivel1 = n1%n2 === 0;
let divisivel2 = n2%n1 === 0;

console.log('O Primeiro numero é maior que o segundo ? ' +maiorMenor);
console.log('O Primeiro numero é igual ao segundo ? ' +igual);
console.log('O Primeiro numero é divisivel pelo segundo ? ' +divisivel1);
console.log('O Segundo numero é divisivel pelo primeiro ? ' +divisivel2);


//DESAFIOOOOOOOOOOOOOOOOO !!!!

let kelvin = (77 - 32)*(5/9) + 273.15;
let fah = (80)*(9/5) + 32
let fahEkelvin1 = (30)*(9/5) + 32
let fahEkelvin2 = 30 + 273.15

console.log('77 Graus Fahrenheit equivale a : ' +kelvin +'º Kelvin');
console.log('80 Graus Celcius equivale a : ' +fah +'º F');
console.log('30 Graus Celcius equivale a : ' +fahEkelvin1 +'º F' +' e ' +fahEkelvin2 +'° C');


const valorEmCelcius = Number(prompt('insira um valor em Celsius para converter :'));
let fahEkelvin3 = (valorEmCelcius)*(9/5) + 32
let fahEkelvin4 = valorEmCelcius + 273.15

console.log(valorEmCelcius +' Graus Celcius equivale a : ' +fahEkelvin3 +'º F' +' e ' +fahEkelvin4 +'° C');