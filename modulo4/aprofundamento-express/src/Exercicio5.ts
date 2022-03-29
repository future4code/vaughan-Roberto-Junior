import express from 'express';
import cors from 'cors';
import { ToDoList } from './Exercicio3';
import { Afazeres } from './Exercicio2';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Backend rodando na porta 3003 !!'); 
})

app.post("/createTodo", (req, res) => {
  
    const body = req.body;

    if(body as Afazeres[]){
      ToDoList.push(body);
      res.send(ToDoList)
    }else{
      res.send('Formato Invalido')
    }
    
})