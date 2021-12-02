//EXERCICIO DE INTERPRETAÇÃO
/*

A. let array
console.log('a. ', array)

***SERÁ IMPRESSO UNDEFINED POIS O ARRAY NÃO FOI DEFINIDO***

B. array = null
console.log('b. ', array)

**SERÁ IMPRESSO NULL**

C. array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

***SERÁ IMPRESSO 11 O NUMERO DE POSIÇÕES DO ARRAY***

D. let i = 0
console.log('d. ', array[i])

***SERÁ IMPRESSO O NUMERO 3 QUE ESTÁ NA POSIÇÃO 0 DO ARRAY***

E. array[i+1] = 19
console.log('e. ', array)

***O ARRAY NA POSIÇÃO 1 SERÁ SUBSTITUIDO PELO NUMERO 19***

F. const valor = array[i+6]
console.log('f. ', valor)

***SERÁ IMPRESSO O NUMERO 9 QUE ESTÁ NA POSIÇÃO 6 DO ARRAY***
*/

//EXERCICIO 1 

let nome = prompt('Qual o Seu Nome ?');
let email = prompt('Digite o seu email : ');

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`);

//EXERCICIO 2

let foods = ['Lasanha', 'Pizza', 'Strogonofe', 'Feijoada', 'Caseira'];
 
console.log(foods);

console.log(`Essas são as minhas comidas preferidas : \n
 ${foods[0]} \n ${foods[1]} \n ${foods[2]} \n ${foods[3]} \n ${foods[4]}`);

 let comidaUser = prompt('Qual sua comida preferida ? ');

 foods.splice(1, 1, comidaUser);

 console.log(foods);

 //EXERCICIO 3

 let listaDeTarefas = [];
 let primeiraTarefa = prompt('Qual a primeira tarefa ?');
 let segundaTarefa = prompt('Qual a Segunda tarefa ?');
 let terceiraTarefa = prompt('Qual a Terceira tarefa ?');

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);

console.log(listaDeTarefas);

let removerTarefa = parseInt(prompt('Digite o indice da tarefa que deseja remover'));

listaDeTarefas.splice(removerTarefa-1, 1);


console.log(listaDeTarefas);

//DESAFIOOOOOOOOOOOOOOOOOOOOO !!!!!!!!!!

// 1 .

let frase = prompt('Digite uma frase: ');

let arrFrase = frase.split(' ');

console.log(arrFrase);

// 2. 

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

let indice = frutas.indexOf('Abacaxi');
let tamanho = (frutas[2].length);

console.log(`o Indice do abacaxi é ${indice} e o tamanho é ${tamanho}`);