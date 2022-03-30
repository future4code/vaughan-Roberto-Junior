import express from 'express';
import cors from 'cors';
import { ToDoList } from './Exercicio3';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, ()=> {
    console.log('Backend rodando na porta 3003 !!'); 
})

app.delete("/deleteTodo/:id/", (req, res) => {
    const id = req.params.id;

    let novaLista = ToDoList.filter((item) => {
        return item.id !== Number(id)
    })

    res.send(novaLista)

})