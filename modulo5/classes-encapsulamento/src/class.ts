

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getCpf(): string{
      return this.cpf
   }

   public getName(): string{
      return this.name
   }

   public getAge(): number{
      return this.age
   }

   public getBalance(): number{
      return this.balance
   }

   public getTransactions(): Transaction[]{
      return this.transactions
   }

   public setTransactions(transaction: Transaction): void{
      this.transactions.push(transaction) 
   }
  
    constructor(cpf: string, name: string, age: number, transactions?: Transaction[]) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       if(transactions){
          this.transactions = transactions;
       }
    }
  
  }


  export class Transaction {
    private description: string;
    private value: number;
    private date: string;
 
    public getDescription(){
       return this.description
    }
 
    public getValue(){
       return this.value
    }
 
    public getdate(){
       return this.date
    }
 
   toString(): string{
       return this.description + this.value + this.date
       
    }
 
    constructor(description: string, value: number, date: string){
       this.description = description;
       this.value = value;
       this.date = date;
    }
 
  }


  export class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount) {
      this.accounts.push(accounts);
    }
  
  }