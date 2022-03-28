import express from 'express';
import cors from 'cors';
import { Pessoas } from './Exercicio3';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Rodando na porta 3000 !'); 
})

app.get("/users", (req, res) => {
    res.send(Pessoas)
})

