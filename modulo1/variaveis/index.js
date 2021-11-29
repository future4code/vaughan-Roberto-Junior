// Exercicio de interpretação

/*
1. será impresso = 10
   será impresso = 10 , 5
   
2. será impresso = 10, 10, 10.

3. horasDias
   valorDia

**/

//Exercicio 1


let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));

/* Foi impresso Undefined pois 
as variáveis não possuem valor 
definido **/

nome = prompt('Qual Seu Nome ?');
idade = prompt('Qual sua idade?');

console.log(typeof(nome));
console.log(typeof(idade));

/*Agora foi retornado o tipo string
pois o retorno do prompt sempre será
do tipo string**/

console.log('Olá ' +nome +' Você tem ' +idade +' Anos');

//Exercicio 2

let respIdade = prompt('Você é Maior de idade?'); 
let respCalcado = prompt('Você está Usando Sandalia ?');
let respCarta = prompt('Você tem Habilitação ?');

console.log('Você é Maior de idade? - ' +respIdade);
console.log('Você está Usando Sandalia ? - ' +respCalcado);
console.log('Você tem Habilitação ? - ' +respCarta);

//Exercicio 3

let a = 10;
let b = 25;

console.log(a);
console.log(b);

c = b;
b = a;
a = c;

console.log(a);
console.log(b);


//DESAFIOOOOO !!

let n1 = parseInt(prompt('Digite o Primeiro Numero :'));
let n2 = parseInt(prompt('Digite o Segundo Numero :'));

n3 = n1 + n2;
n4 = n1 * n2;

console.log('a Soma dos numeros é ' +n3);
console.log('a Multiplicação dos numeros é : ' +n4);