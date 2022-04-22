//Exercicio 1

import { Bank, Transaction, UserAccount } from "./class";

//a) o construtor serve para criar uma nova instância daquela classe, para chama-lo new nomedaClasse()



//Exercicio 2



  let novaConta = new UserAccount('043000', 'EuMesmo', 27);

  

  //a mensagem foi impressa apenas uma vez
  
  // C) usando os metodos Geters e Seters

  //Exercicio 2

  

 let novaTransacao = new Transaction('Pagamento de Agua', 300, '18/04/2022');
 let novaTransacao2 = new Transaction('Pagamento de Luz', 400, '18/04/2022');

 novaConta.setTransactions(novaTransacao);
 novaConta.setTransactions(novaTransacao2);

 console.log(novaConta);

 //Exercicio 3

 new Bank(novaConta);
 
 

 
 


