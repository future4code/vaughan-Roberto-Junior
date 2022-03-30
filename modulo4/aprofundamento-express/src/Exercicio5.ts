import express from 'express';
import cors from 'cors';
import { ToDoList } from './Exercicio3';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Backend rodando na porta 3003 !!'); 
})

app.post("/createTodo", (req, res) => {
    
  
   const body =  {
    userId: Number(req.headers.authorization),
    id: new Date().getTime(),
    title: req.body.title,
    completed: req.body.completed
}

      ToDoList.push(body);

      res.send(ToDoList);

})