// EXERCICIOS DE INTERPRETAÇÃO

/*
1A.
O CODIGO REALIZA A VERIFICAÇÃO SE O NUMERO É PAR
1B.
PARA OS NUMEROS PARES
2B.
PARA OS NUMEROS IMPARES


2A.
PARA ADICIONAR UM PREÇO DE ACORDO COM A RESPOSTA DO USER
2B.
O PREÇO DA MAÇÃ É R$2,25
2C.
SERÁ IMPRESSO O PREÇO DO DEFAULT POIS FOI RETIRADO O BREAK


3A.
A PRIMEIRA LINHA ESTA ARMAZENANDO O NUMERO DIGITADO PELO USER
3B.
COM O NUMERO 10 SERÁ IMPRESSO ESSE NUMERO PASSOU NO TESTE
COM O NUMERO -10 NÃO SERÁ IMPRESSO NADA POIS NÃO ENTRA NA CONDIÇÃO
3C.
O ERRO DIRA QUE A VARIAVEL MENSAGEN NÃO ESTÁ DEFINIDA POIS
ELA FOI CRIADA DENTRO DO ESCOPO DO IF E NÃO PODE SER ACESSADO
DE FORA DELE.

*/

//EXERCICIOS DE ESCRITA

//1

let idade = parseInt(prompt('Qual sua idade ?'));

if (idade >= 18){
  console.log('Você pode dirigir !!');
}else{
  console.log('Você não pode dirigir !!');
}

//2

let turno = prompt('insira o seu turno (M, V ou N)').toUpperCase();

if (turno === "M"){
  console.log('Bom Dia !!');
}else if(turno === "N"){
    console.log('Boa Noite !!')
}else{
    console.log('Boa Tarde !!');
}

//3

let turno1 = prompt('insira o seu turno (M, V ou N)').toUpperCase();

switch(turno1){
    case "M":
        console.log('Bom Dia !!');
        break;
    case "N":
        console.log('Boa Noite !!');
        break;
    case "V":
        console.log('Boa Tarde !!');
    default:
        console.log('turno invalido');
}

//4

let generoFilme = prompt('Qual o genero do filme ?').toLowerCase();
let precoIngresso = parseInt(prompt('Qual o valor do ingresso?'));

if(generoFilme === "fantasia" && precoIngresso < 15){
    console.log('Bom Filme');
}else{
    console.log('Escolha outro Filme');
}

//DESAFIOOOOOOOOOOOOOOO !!!!!!!!

//1

let generoFilme = prompt('Qual o genero do filme ?').toLowerCase();
let precoIngresso = parseInt(prompt('Qual o valor do ingresso?'));

if(generoFilme === "fantasia" && precoIngresso < 15){
    let lanche = prompt('Qual lanche vai comprar ?');
    console.log('Bom Filme');
    console.log(`aproveite o seu ${lanche}`);
}else{
    console.log('Escolha outro Filme');
}

//2

let nome = prompt('Nome Completo');
let tipoJogo = prompt('Tipo de jogo (IN = internacional/DO = domestico)');
let etapa = prompt('Etapa do jogo (SF=Semifinal/DT=Decisão terceiro Lugar/FI=final)').toUpperCase();
let categoria = parseInt(prompt('Qual a categoria? (1,2,3 ou 4)'));
let qtdIngresso = parseInt(prompt('Quantidade de ingresso :'));


let texto = `Nome do Cliente: ${nome}\n
Tipo de Jogo: ${tipoJogo}\n
Etapa do jogo: ${etapa}\n
Categoria: ${categoria}\n
Qtd de ingresso: ${qtdIngresso}\n
---Valores---\n
valor do ingresso: R$1.320\n
valor total: ${valorFinal}`

if (categoria == 1 && etapa == "SF" && tipoJogo == "DO"){
    valorFinal = 1320*qtdIngresso;
    console.log(`Nome do Cliente: ${nome}\n
    Tipo de Jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapa}\n
    Categoria: ${categoria}\n
    Qtd de ingresso: ${qtdIngresso}\n
    ---Valores---\n
    valor do ingresso: R$1.320\n
    valor total: ${valorFinal}`);
}else if (categoria == 2 && etapa == "SF" && tipoJogo == "DO"){
    valorFinal = 880*qtdIngresso;
    console.log(`Nome do Cliente: ${nome}\n
    Tipo de Jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapa}\n
    Categoria: ${categoria}\n
    Qtd de ingresso: ${qtdIngresso}\n
    ---Valores---\n
    valor do ingresso: R$880\n
    valor total: ${valorFinal}`);
}else if (categoria == 3 && etapa == "SF" && tipoJogo == "DO"){
    valorFinal = 550*qtdIngresso;
    console.log(`Nome do Cliente: ${nome}\n
    Tipo de Jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapa}\n
    Categoria: ${categoria}\n
    Qtd de ingresso: ${qtdIngresso}\n
    ---Valores---\n
    valor do ingresso: R$550\n
    valor total: ${valorFinal}`);
}else if (categoria == 4 && etapa == "SF" && tipoJogo == "DO"){
    valorFinal = 220*qtdIngresso;
    console.log(`Nome do Cliente: ${nome}\n
    Tipo de Jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapa}\n
    Categoria: ${categoria}\n
    Qtd de ingresso: ${qtdIngresso}\n
    ---Valores---\n
    valor do ingresso: R$220\n
    valor total: ${valorFinal}`);
}

//INCOMPLETO