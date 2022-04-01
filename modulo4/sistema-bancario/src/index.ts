import cors from 'cors'
import express from 'express'
import { AddressInfo } from 'net';

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);      
    }else{
        console.error(`Failure upon starting server.`);
    }
});


let bank:any = [];

app.get("/allAccount", (req, res) => {
    res.send(bank)
})

app.post("/createAccount", (req, res) => {
    const {name, CPF, nascimento} = req.body;

    try {
    
    // verifica se os campos existem
    if(!name || !CPF || !nascimento){
        throw new Error("Verifique se os campos estão sendo  passados corretamente !");
    }  

    let yearUser = nascimento.split("/");

    let idade: number = new Date().getFullYear() - Number(yearUser[2]);

    //verifica se a idade é maior que 18
    if(idade < 18){
        throw new Error('Para abrir uma conta deve ser maior de idade')
    }
     
    //veriffica se ja existe aquele cpf no banco
    let jaTemConta = bank.filter((item: any) => item.CPF === CPF);

    console.log(jaTemConta);
    
    if(jaTemConta.length !== 0){
        throw new Error('Ja existe uma conta com esse CPF');
    }

    //cria uma nova conta
    let newAccount = {
        name: name,
        CPF: CPF,
        nascimento: nascimento,
        saldo: 0,
        extrato: [{}]
    }

    bank.push(newAccount);

    res.status(201).send('Conta Criada com sucesso !')
    console.log(bank);

    }catch(err){
        res.send(err.message);
    }

})

app.put("/addBalance", (req, res) => {
    const {name, CPF, saldo} = req.body

   try{

    if(typeof saldo !== 'number' || saldo <= 0){
       throw new Error("saldo deve ser do tipo numero e maior que 0");
    }

    if(!name || !CPF || !saldo){
        throw new Error("Verifique se os campos estão sendo  passados corretamente !");
    } 

    let correntista: any = bank.filter((item: any) => {
        return item.name === name && item.CPF === CPF
    })

    if(correntista.length === 0){
        throw new Error("Conta não localizada !")
    }

    bank.map((item: any) => {
       if(item.name === name && item.CPF === CPF){
         item.saldo = item.saldo + Number(saldo);
       }
    })

    res.send(correntista)

   }catch(err){
       res.send(err.message)
   }
})


app.put("/payAccount", (req, res) => {
    let {name, CPF, valor, descricao, dataPagamento} = req.body
    let conta = false;    

     try {

        if(dataPagamento){
           
            let dataMaior = new Date(dataPagamento.split("/").reverse().join("/")).getTime()+86400000 < new Date().getTime()

            if(dataMaior){
                throw new Error('Data Deve ser maior ou igual a data atual')
            }

        }
        
        if(!valor || !descricao || !name || !CPF){
            throw new Error("Verifique se os campos estão sendo passados corretamente !")
        }

        if(typeof valor !== 'number' || valor < 0){
            throw new Error('valor deve ser do tipo numero e maior que 0');
        }

        bank.map((item: any) => {
            if(item.name === name && item.CPF === CPF){
                conta = true;
                if(item.saldo >= Number(valor)){
                    item.saldo = item.saldo - Number(valor)
                    res.status(200).send('Conta paga com sucesso');
                }else{
                    throw new Error('Saldo Insuficiente !');
                }
            }
        })

      if(!conta){
        throw new Error('Conta não localizada');
    }

     }catch(err){
         res.send(err.message)
     }
})