//Exercicio 3

let tarefas = [];

const tarefaUser = process.argv[2];

tarefas.unshift(tarefaUser);
console.log('Tarefa Adicionada com sucesso');
console.table(tarefas);  
