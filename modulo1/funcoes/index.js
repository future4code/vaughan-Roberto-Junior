//EXERCICIO DE INTERPRETAÇÃO 

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) **SERÁ IMPRESSO 10**
console.log(minhaFuncao(10)) ** SERÁ IMPRESSO 50**

**SERIA EXIBIDO SOMENTE O SEGUNDO RESULTADO, MAS NO CONSOLE 
NÃO FAZ DIFERENÇA NENHUMA RETIRAR O CONSOLE.LOG**
________________________________________________

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

** O CODIGO PEDE PRO USUARIO DIGITAR UM TEXTO 
 DEPOIS VERIFICA SE NO TEXTO EXISTE A PALAVRA CENOURA SE SIM RETORNA TRUE SE NÃO RETORNA FALSE**

 **INDEPENDENTE SE FOR CENOURA OU cenoura O CODIGO RETORNA TRUE POIS ESTÁ SENDO
 CONVERTIDO PARA MINUSCULA USANDO O TOLOWERCASE, MESMA COISA SE FOR DIGITADO
 CEROURASS , POIS A PALAVRA POSSUI O TERMO CENOURA**

 _________________________________________________

*/

//EXERCICIO 1.A

function sobreMim(){
    console.log('Olá eu sou Roberto Maia, tenho 27 anos moro em Brasilia e sou estudante')
}
sobreMim();

//EXERCICIO 1.B

function informacoes(nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

let nome = prompt('Qual seu nome? ');
let idade = parseInt(prompt('Qual sua idade? '));
let cidade = prompt('Qual sua Cidade? ');
let profissao = prompt('Qual sua profissão? ');

alert(informacoes(nome, idade, cidade, profissao));

//EXERCICIO 2.A

let somar = (n1 ,n2) => n1+n2;

console.log(somar(3, 7));

//EXERCICIO 2.B

function retornarBoo(n1, n2){
    return n1 >= n2;
}

retornarBoo(7, 4);

//EXERCICIO 2.C

let ePar = numero1 => { return numero1%2 === 0;}

ePar(7);

//EXERCICIO 2.D

function mensagem(msg){
    console.log(msg.length);
    console.log(msg.toUpperCase());
}

let mensagemUser = prompt('Digite uma mensagem');

mensagem(mensagemUser);

//EXERCICIO 3

function soma (n1, n2){
   console.log(`Numeros inseridos ${n1} e ${n2}`);
   console.log(`Soma ${n1 + n2}`);
}
function subtracao(n1, n2){
    console.log(`Numeros inseridos ${n1} e ${n2}`);
    console.log(`Diferença ${n1-n2}`);
}
function multiplicacao(n1, n2){
    console.log(`Numeros inseridos ${n1} e ${n2}`);
    console.log(`Multiplicação ${n1*n2}`);
}
function divisao(n1, n2){
    console.log(`Numeros inseridos ${n1} e ${n2}`);
    console.log(`Divisão ${n1/n2}`);
}

soma(Number(prompt('insira o primeiro numero')), Number(prompt('insira o segundo Numero')));
subtracao(Number(prompt('insira o primeiro numero')), Number(prompt('insira o segundo Numero')));
multiplicacao(Number(prompt('insira o primeiro numero')), Number(prompt('insira o segundo Numero')));
divisao(Number(prompt('insira o primeiro numero')), Number(prompt('insira o segundo Numero')));


//DESAFIOOOOOOOOOOOOOOOOOOOOOOOO !!

//a. 

let imprimir = (param) => {return param};

imprimir('Turma Vaughan !!');

//b.

let sooma = (a, b) => a+b;

imprimir(sooma(3, 5))

//2.

function calcularHipotenusa (val1, val2){
    hip = Math.hypot(val1, val2)
    return hip
}

calcularHipotenusa(Number(prompt('insira o primeiro numero')), 
Number(prompt('insira o segundo Numero')));



