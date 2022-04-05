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

//tipo de conta
type Contas = {
        name: string,
        CPF: string,
        nascimento: string,
        saldo: number,
        extrato: Extrato[]
}

//tipo do extrato
type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

//criação do banco
let bank: Contas[] = [];

//endpoint que exibe todas as contas
app.get("/allAccount", (req, res) => {
    res.send(bank)
})

//endpoint para criar uma conta
app.post("/createAccount", (req, res) => {
    const {name, CPF, nascimento} = req.body;

    try {
    
    // verifica se os campos existem
    if(!name || !CPF || !nascimento){
        throw new Error("Verifique se os campos estão sendo  passados corretamente !");
    }  

    let yearUser: string = nascimento.split("/");

    let idade: number = new Date().getFullYear() - Number(yearUser[2]);

    //verifica se a idade é maior que 18
    if(idade < 18){
        throw new Error('Para abrir uma conta deve ser maior de idade')
    }
     
    //veriffica se ja existe aquele cpf no banco
    let jaTemConta: Contas[] = bank.filter((item: any) => item.CPF === CPF);

    
    if(jaTemConta.length !== 0){
        throw new Error('Ja existe uma conta com esse CPF');
    }

    //cria uma nova conta
    let newAccount: Contas = {
        name: name,
        CPF: CPF,
        nascimento: nascimento,
        saldo: 0,
        extrato: []
    }

    bank.push(newAccount);

    res.status(201).send('Conta Criada com sucesso !')
    console.log(bank);

    }catch(err){
        res.send(err.message);
    }

})


//endpoint que adiciona saldo a conta
app.put("/addBalance", (req, res) => {
    const {name, CPF, saldo} = req.body

   try{

    //verifica se o saldo informado é do tipo number e se o mesmo é maior que 0 
    if(typeof saldo !== 'number' || saldo <= 0){
       throw new Error("saldo deve ser do tipo numero e maior que 0");
    }

    if(!name || !CPF || !saldo){
        throw new Error("Verifique se os campos estão sendo  passados corretamente !");
    } 

    //verifica se existe um correntista
    let correntista: Contas[] = bank.filter((item: any) => {
        return item.name === name && item.CPF === CPF
    })

    if(correntista.length === 0){
        throw new Error("Conta não localizada !")
    }

    //adiciona o saldo a conta
    bank.map((item: Contas) => {
       if(item.name === name && item.CPF === CPF){
         item.saldo = item.saldo + Number(saldo);
         //adiciona a transação ao extrato
         item.extrato.push({
            valor: Number(saldo),
            data: String(new Date().getTime()),
            descricao: 'Depósito de dinheiro'
         })
       }
    })

    res.send(correntista)

   }catch(err){
       res.send(err.message)
   }
})


//endpoint de pagar contas
app.put("/payAccount", (req, res) => {
    let {name, CPF, valor, descricao, dataPagamento} = req.body
    let conta: boolean = false;    

     try {

        //se for informado data de pagamento verifica se é maior que a atual
        if(dataPagamento){
           
            let dataMaior: boolean = new Date(dataPagamento.split("/").reverse().join("/")).getTime()+86400000 < new Date().getTime()

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
            //faz a busca pela conta
            if(item.name === name && item.CPF === CPF){
                conta = true;
                //verifica se o valor da conta a pagar é maior ou igual ao saldo da conta
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


//endpoint de transferencia entre contas
app.put('/transfer', (req, res) => {

    const {nomeRemetente, cpfRemetente, nomeDestinatario, cpfDestinatario, valor} = req.body
    let achouRemetente: boolean = false;

    try {
      
        //validações de campos
        if(!nomeRemetente || !cpfRemetente || !nomeDestinatario || !cpfDestinatario || !valor){
            throw new Error('Verifique se todos os campos estão sendo passados corretamente !')
        }else if(typeof nomeRemetente !== 'string' || typeof cpfRemetente !== 'string' || typeof nomeDestinatario !== 'string' || typeof cpfDestinatario !== 'string'){
            throw new Error('os campos de nome e cpf devem ser do tipo String')
        }else if(typeof valor !== 'number'){
            throw new Error('o campo valor deve ser do tipo number')
        }

        //verifica se o banco possui no minimo 2 clientes
        if(bank.length === 0){
            throw new Error('o Banco está vazio !')
        }else if(bank.length === 1){
            throw new Error('o Banco deve ter pelo menos 2 clientes')
        }


        //faz a validação se existe a conta de destino
        const validarDestinatario = (): boolean => {
            for(let j = 0; j < bank.length; j++){
                if(bank[j].name === nomeDestinatario && bank[j].CPF === cpfDestinatario){
                    bank[j].saldo = bank[j].saldo + valor
                    return true
                }
            }

            return false;
        }
         
        for(let i = 0; i <= bank.length; i++){
            //localiza o remetente
            if(nomeRemetente === bank[i].name && cpfRemetente === bank[i].CPF){
                achouRemetente = true;
                //se existir verifica o saldo
                if(valor <= bank[i].saldo){
                    if(validarDestinatario()){
                        //se tiver saldo e for lozalizado o destinatario faz o desconto do valor
                        bank[i].saldo = bank[i].saldo - valor
                        res.status(200).send('Transferencia realizada com sucesso !').end()
                    }else{
                        throw new Error('Conta de destino não encontrada');
                    }
                }else if(bank[i].saldo === 0){
                    throw new Error(`Sua conta esta com saldo 0`)
                }else{
                    throw new Error(`Saldo insuficiente, insira um valor menor ou igual a ${bank[i].saldo}`)
                }
            }
        }


        if(!achouRemetente){
            throw new Error('Conta de Envio não encontrada');
        }


    }catch(err){
        res.send(err.message);
    }

})


//Busca por CPF

app.get('/accountByCpf/:cpf', (req, res) => {
    const cpfSearch: string = req.params.cpf

   try {

    let existeConta: Contas[] = bank.filter((item) => {
        return item.CPF === cpfSearch
    })

    if(existeConta.length === 0){
        throw new Error('CPF não localizado')
    }

    res.send(existeConta);

   }catch(err){
       res.send(err.message)
   }
})