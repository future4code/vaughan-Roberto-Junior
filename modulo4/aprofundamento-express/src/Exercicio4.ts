import express from 'express';
import cors from 'cors';
import { ToDoList } from './Exercicio3';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Backend rodando na porta 3003 !!'); 
})

app.get("/todo/:status", (req, res) => {
    const status = req.params.status;

    const todoTrue = ToDoList.filter((item) => {
        return item.completed === true;
    });

    const todoFalse = ToDoList.filter((item) => {
        return item.completed === false;
    });
  
    
    if(status == 'true'){
       res.send(todoTrue);
    }else if(status == 'false'){
       res.send(todoFalse);
    }else{
        res.send('Insira True ou False');
    }

})