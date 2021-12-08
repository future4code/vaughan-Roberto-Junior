// EXERCICIO DE INTERPRETAÇÃO

/*
//EXERCICIO 1

**SERÁ IMPRESSO NO PRIMEIRO CONSOLE LOG : Matheus Nachtergaele**
**SERÁ IMPRESSO NO SEGUNDO CONSOLE LOG : Virginia Cavendish, POIS ESTÁ RETORNANDO O ULTIMO ITEM SO ARRAY**
**SERÁ IMPRESSO NO TERCEIRO CONSOLE LOG : {canal: "Globo", horario: "14h"}**


//EXERCICIO 2
A.
PRIMEIRO CONSOLE   nome: "Juca", 
	               idade: 3, 
	               raca: "SRD"

SEGUNDO CONSOLE    nome: "Juba", 
	               idade: 3, 
	               raca: "SRD"

TERCEIRO CONSOLE   nome: "Jubo", //foi trocado o a pelo o pelo replacell 
	               idade: 3, 
	               raca: "SRD"

B.
OS 3 PONTOS É O SPRED OPERATOR , SERVE PARA MESCLAR TODAS AS INFORMAÇÕES
DO OBJETO CHAMADO

//EXERCICIO 3
A.
O PRIMEIRO CONSOLE SERÁ IMPRESSO FALSE
O SEGUNDO CONSOLE RETORNARA UNDEFINED

B.
O PRIMEIRO RETORNOU FALSE POIS NA FUNÇÃO MINHAfUNCAO ELE RETORNA O ATRIBUTO DA PROPRIEDADE
O SEGUNDO RETORNOU UNDEFINED POIS NÃO EXISTE A PROPRIEDADE ALTURA NO OBJETO.

*/

//EXERCICIO DE INTERPRETAÇÃO
// EXERCICIO 1A.
const pessoa = {
    nome: "Roberto",
    apelidos: ['Robertinho', 'Junior', 'Roberto Maia']
}

function receber(obj){
    console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}
, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`);
}

receber(pessoa);


//1B.

const novaPessoa = {
    ...pessoa,
    apelidos: ['novoApelido1', 'novoApelido2', 'novoApelido3']
}

receber(novaPessoa);

//EXERCICIO 2


const pessoa1 = {
    nome : 'Beatriz',
    idade : 21,
    profissao : 'Auxiliar de Cozinha'
}

const pessoa2 = {
    nome : 'Cirlene',
    idade : 40,
    profissao : 'Secretaria'
}

function retornaObj(obj){
    arr = [];
    arr.push(obj.nome);
    arr.push(obj.nome.length);
    arr.push(obj.idade);
    arr.push(obj.profissao);
    arr.push(obj.profissao.length);

    console.log(arr);
}

retornaObj(pessoa1);
retornaObj(pessoa2);

//EXERCICIO 3

carrinho = [];

const fruta1 = {
    nome : 'Maçã',
    disponibilidade: true     
}
const fruta2 = {
    nome : 'Abacate',
    disponibilidade : true
}
const fruta3 = {
    nome : 'Banana',
    disponibilidade : true    
}

function recebeObj (fruta) {
    carrinho.push(fruta);
}

recebeObj(fruta1);
recebeObj(fruta2);
recebeObj(fruta3);  

console.log(carrinho);


//DESAFIOOOOOOOOOOOOOOOOOOO !!!!!!!!!!!!

//1

function dadosUser (){
    let nome = prompt('Qual seu nome ?')
    let idade = prompt('Qual sua idade ?')
    let profissao = prompt('Qual sua profissão ?')
   
    const ser = {};
    ser.nome = nome;
    ser.idade = idade;
    ser.profissao = profissao;
 
    console.log(ser)
}

dadosUser();

//2

const filme1 = {
    nome: 'interestelar',
    anoDeLancamento: 2019
}
const filme2 = {
    nome: 'Donnie Darko',
    anoDeLancamento: 2019
}

function lancamento (obj1, obj2){
    res1 = obj1.anoDeLancamento < obj2.anoDeLancamento;
    res2 = obj1.anoDeLancamento == obj2.anoDeLancamento;

    console.log(`O primeiro filme foi lançado antes do segundo? ${res1}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${res2}`);
}

lancamento(filme1, filme2);

//3

function controleEstoque(fruta){
    if (fruta.disponibilidade === false){
        fruta.disponibilidade = true;
        console.log(` ${fruta.nome} Disponibilidade : ${fruta.disponibilidade}`)
    } else {
        fruta.disponibilidade = false;
        console.log(` ${fruta.nome} Disponibilidade : ${fruta.disponibilidade}`)
    }
}

controleEstoque(fruta1);
controleEstoque(fruta2);
controleEstoque(fruta3);







