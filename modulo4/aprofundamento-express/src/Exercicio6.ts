import express from 'express';
import cors from 'cors';
import { ToDoList } from './Exercicio3';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Backend rodando na porta 3003 !!'); 
})

app.put("/editStatus/:id/", (req, res) => {
    const id = req.params.id;

    ToDoList.map((item) => {
       if(item.id === Number(id)){
           item.completed = !item.completed;
       }
    })

    res.send(ToDoList)

})